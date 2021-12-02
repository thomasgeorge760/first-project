import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllProducts, getProduct, getProductsBySlug } from '../../actions';
import { addProductToCart } from '../../actions/cart.actions';
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig';
import './style.css'

function ProductDetail(props) {

    const product = useSelector(state => state.product.product)
    const user = JSON.parse(localStorage.getItem('user'))
    
    const dispatch = useDispatch();

    const { id } = useParams()

    useEffect(() => {
        

        dispatch(getProduct(id))
    }, [])

    const addToCart = () => {
        const data = {
            user: {
                _id: user._id
            },
            cartItems: {
                product: id,
                price: product.price,
                quantity: 1
            }
        }
        dispatch(addProductToCart(data))
    }

    if (product.name) {
        
        return (
            <Layout> 
                <Container>
                    <Row>
                        <Col style={{ backgroundColor: 'white' }} md={5}>

                            <div style={{ display: 'flex', flexDirection: 'row', height: '40vh' }}>
                                <div className="productImgPreviewContainer" style={{ display: 'flex', flexDirection: 'column', height: '' }}>
                                    {product.productImage.map(image =>

                                        <div className="productImgPreviewThumb">
                                            <img src={generatePublicUrl(image.img)} alt=""></img>
                                        </div>

                                    )}
                                </div>
                                <div className="productImgPreview">
                                    <img src={generatePublicUrl(product.productImage[0].img)} alt=""></img>
                                </div>
                            </div>
                            <div className="actions">
                                <Button className="btn btn-warning" onClick={addToCart}>Add to cart</Button>
                                
                                <Link className="btn btn-success" to={`/checkout/${id}`}>Buy Now</Link>
                            </div>





                        </Col>
                        <Col style={{ backgroundColor: 'white', height: '44vh' }} md={6}>
                            <div>
                                <h3>{product.name}</h3>
                            </div>
                            <div>
                                <h3>MRP :  {product.price}</h3>
                            </div>
                            <div>
                                <h3>Description :</h3>
                                <p>{product.description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>

        )
    }
    return (
        <Layout>
            <Link to="/">Home</Link>
            <h1>product not found</h1>
        </Layout>
    )

}

export default ProductDetail
