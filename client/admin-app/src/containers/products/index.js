import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@restart/ui/esm/Button';
import Input from '../../components/UI/Input';
import { addProduct } from '../../actions';
import Modal from '../../components/UI/modal'
import './style.css'
import { generatePublicUrl } from '../../urlConfig';

function Products(props) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [productPictures, setProductPictures] = useState([])
    const [productDetailsModal, setProductDetailsModal] = useState(false)
    const [productDetails, setProductDetails] = useState(null)
    const category = useSelector(state => state.category)
    const product = useSelector(state => state.products)

    const dispatch = useDispatch();

    const handleClose = () => {

        setShow(false);
    }
    const handleShow = () => setShow(true);
    const modalSubmit = () => {
        const form = new FormData();
        form.append('name', name)
        form.append('quantity', quantity)
        form.append('price', price)
        form.append('description', description)
        form.append('category', categoryId)
        for (let pic of productPictures) {
            form.append('productImage', pic)
        }


        dispatch(addProduct(form))

        setName('')
        setQuantity('')
        setPrice('')
        setDescription('')
        setCategoryId('')
        setProductPictures([])

        setShow(false);
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleProductPictures = (e) => {

        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ])
    }

    //console.log(productPictures);

    const RenderProducts = () => {

        console.log(product)

        return (
            <Table style={{ fontSize: 12 }} responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>

                        
                        <th>Category</th>
                        <th>Delete</th>

                        {/* {Array.from({ length: 12 }).map((_, index) => (
                                        <th key={index}>Table heading</th>
                                    ))} */}
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map(product =>
                                <tr onClick={() => showProductDetailsModal(product)}>
                                    <td>1</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>

                                    <td>{product.category.name}</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                    

                                </tr>
                            ) : null
                    }


                </tbody>
            </Table>
        )
    }

    const renderAddProductModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleClose}
                modalSubmit={modalSubmit}
                modalSubmitLabel="Add product"
                modalSubmitVariant="success"
                modalTitle="add new category"
            >

                <Input
                    label="Name"
                    value={name}
                    placeholder={"Product name"}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={"Product quantity"}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                    label="Price"
                    value={price}
                    placeholder={"Product price"}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    label="Description"
                    value={description}
                    placeholder={"Product description"}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    className="form-control"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}>
                    <option>Select category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)

                    }
                </select>
                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }
                <input type="file" name="productPicture" onChange={handleProductPictures} />


            </Modal>
        )
    }

    const handleCloseProductDetailsModal = () => {

        setProductDetailsModal(false)
    }


    const showProductDetailsModal = (product) => {
       
        setProductDetails(product)

        setProductDetailsModal(true);


    }


    const renderProductDetailsModal = () => {
        

        if (!productDetails) {
            return null
        }

        

        return (
            <Modal
                show={productDetailsModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Product Details'}
                size="lg"
            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="value">{productDetails.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Price</label>
                        <p className="value">{productDetails.price}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="value">{productDetails.quantity}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Category</label>
                        <p className="value">{productDetails.category.name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="key">Description</label>
                        <p className="value">{productDetails.description}</p>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <label className="key">Product Images</label>
                        <div style={{ display: 'flex' }} >
                            {productDetails.productImage.map(picture =>
                                <div className="productImagesContainer">
                                    <img src={generatePublicUrl(picture.img)} />
                                </div>
                            )}
                        </div>
                    </Col>

                </Row>

            </Modal>
        )
    }



    return (
        <Layout sidebar>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className="categoryDiv">
                            <h3>Products</h3>
                            <button className="btn btn-success" onClick={handleShow}>Add products</button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {RenderProducts()}
                    </Col>
                </Row>
            </Container>

            {renderAddProductModal()}

            {renderProductDetailsModal()}
        </Layout>
    )
}

export default Products
