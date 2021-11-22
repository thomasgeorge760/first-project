import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { addCategory, deleteCategory, editCategory, getAllCategory } from '../../actions'
import Button from '@restart/ui/esm/Button'
import Input from '../../components/UI/Input'
import Modal from '../../components/UI/modal'



function Category(props) {

    const category = useSelector(state => state.category)
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('')
    const [editCategoryName, setEditCategoryName] = useState('')
    const [editCategoryNamePH, setEditCategoryNamePH] = useState('Category name')
    


    const dispatch = useDispatch()

    /* -------------------------------------------------------------------------- */
    /*                       add new category modal controls                      */
    /* -------------------------------------------------------------------------- */

    const handleClose = () => {

        setShow(false);
    }
    const modalSubmit = () => {
        const form = new FormData();
        form.append('name', categoryName)
        form.append('parentId', parentCategoryId)
        form.append('categoryImage', categoryImage)

        dispatch(addCategory(form))
        setCategoryName('')
        setParentCategoryId('')
        setCategoryImage('')
        setShow(false);
    }
    const handleShow = () => setShow(true);

    /* -------------------------------------------------------------------------- */
    /*                        edit category modal controls                        */
    /* -------------------------------------------------------------------------- */

    const handleEditShow = () => setEditShow(true);
    const modalEditSubmit = () => {
        const form = new FormData();
        form.append('name', editCategoryName)
        form.append('categoryId', parentCategoryId)
        form.append('categoryImage', categoryImage)

        dispatch(editCategory(form))
        setCategoryName('')
        setParentCategoryId('')
        setCategoryImage('')
        setEditShow(false);
    }
    const handleEditClose = () => setEditShow(false);


    /* -------------------------------------------------------------------------- */
    /*                        delete category modal controls                        */
    /* -------------------------------------------------------------------------- */

    const handleDeleteShow = () => setDeleteShow(true);
    const modalDeleteSubmit = () => {
        const form = new FormData();
        form.append('name', editCategoryName)
        form.append('categoryId', parentCategoryId)
        form.append('categoryImage', categoryImage)

        dispatch(deleteCategory(form))
        setCategoryName('')
        setParentCategoryId('')
        setCategoryImage('')
        setDeleteShow(false);
    }
    const handleDeleteClose = () => setDeleteShow(false);



    /* -------------------------------------------------------------------------- */
    /*                            rendering categories                            */
    /* -------------------------------------------------------------------------- */

    const renderCategories = (categories) => {

        let Categories = [];
        for (let category of categories) {
            Categories.push(
                <li key={category._id}>
                    {category.name}
                    {category.children.length > 0 ? (
                        <ul>
                            {renderCategories(category.children)}
                        </ul>
                    ) : null}
                </li>
            );
        }

        return Categories;

    }

    /* -------------------------------------------------------------------------- */
    /*                            making category list                            */
    /* -------------------------------------------------------------------------- */

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    /* -------------------------------------------------------------------------- */
    /*                           handling category image                          */
    /* -------------------------------------------------------------------------- */

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    /* -------------------------------------------------------------------------- */
    /*                                   return                                   */
    /* -------------------------------------------------------------------------- */


    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="categoryDiv">
                            <h3>Category</h3>
                            <button className="btn btn-success" onClick={handleShow}>Add category</button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                    <Col md={6}>
                        <div className="categoryEditDiv">
                            <button className="btn btn-warning" onClick={handleEditShow}>Edit category</button>
                            <button className="btn btn-danger" onClick={handleDeleteShow}>Delete category</button>
                        </div>
                    </Col>
                </Row>
            </Container>


            {/*---------------------------- add new category modal ---------------------*/}


            <Modal
                show={show}
                handleClose={handleClose}
                modalSubmit={modalSubmit}
                modalSubmitLabel="Add new"
                modalTitle="add new category"
            >
                <Input
                    value={categoryName}
                    placeholder={"category name"}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <select
                    className="form-control"
                    // value={parentCategoryId}
                    onChange={(e) => setParentCategoryId(e.target.value)}>
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)

                    }
                </select>

                <input style={{ marginTop: 15 }} type="file" name="categoryImage" onChange={handleCategoryImage}></input>

            </Modal>


            {/*---------------------------- edit category modal ---------------------*/}




            <Modal
                show={editShow}
                handleClose={handleEditClose}
                modalSubmit={modalEditSubmit}
                modalSubmitLabel="Edit"
                modalTitle="Edit category"
            >
                <label>Select category</label>
                <select
                    className="form-control"
                    value={parentCategoryId}
                    onChange={(e) => {
                        setParentCategoryId(e.target.value);
                        if (e.target.value != "select category") {
                            setEditCategoryNamePH(createCategoryList(category.categories).filter(option => option.value === e.target.value)[0].name)
                        }
                    }}>
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option =>

                            <option key={option.value} value={option.value}>{option.name}</option>)




                    }
                </select>

                <Input
                    value={editCategoryName}

                    placeholder={editCategoryNamePH}
                    onChange={(e) => setEditCategoryName(e.target.value)}
                >

                </Input>

                <input style={{ marginTop: 15 }} type="file" name="categoryImage" onChange={handleCategoryImage}></input>

            </Modal>


            {/*---------------------------- delete category modal ---------------------*/}




            <Modal
                show={deleteShow}
                handleClose={handleDeleteClose}
                modalSubmit={modalDeleteSubmit}
                modalSubmitLabel="Delete"
                modalTitle="Delete category"
            >
                <label>Select category</label>
                <select
                    className="form-control"
                    value={parentCategoryId}
                    onChange={(e) => {
                        setParentCategoryId(e.target.value);
                        if (e.target.value != "select category") {
                            setEditCategoryNamePH(createCategoryList(category.categories).filter(option => option.value === e.target.value)[0].name)
                        }
                    }}>
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option =>

                            <option key={option.value} value={option.value}>{option.name}</option>)


                    }
                </select>

                

                <label>Are sure you want to delete {editCategoryNamePH} ?</label>

                {/* <Input
                    value={editCategoryName}

                    placeholder={editCategoryNamePH}
                    onChange={(e) => setEditCategoryName(e.target.value)}
                >

                </Input> */}

                {/* <input style={{ marginTop: 15 }} type="file" name="categoryImage" onChange={handleCategoryImage}></input> */}

            </Modal>

        </Layout>
    )
}

export default Category
