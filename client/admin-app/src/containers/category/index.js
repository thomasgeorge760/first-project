import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { addCategory, getAllCategory } from '../../actions'
import Button from '@restart/ui/esm/Button'
import Input from '../../components/UI/Input'
import Modal from '../../components/UI/modal'



function Category(props) {

    const category = useSelector(state => state.category)
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('')
    const dispatch = useDispatch()

   

    const handleClose = () => {
       
        setShow(false);
    }
    const modalSubmit = () =>{
        const form = new FormData();
        form.append('name',categoryName)
        form.append('parentId',parentCategoryId)
        form.append('categoryImage',categoryImage)

        dispatch(addCategory(form))
        setCategoryName('')
        setParentCategoryId('')
        setCategoryImage('')
        setShow(false);
    }
    const handleShow = () => setShow(true);
   
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

    const createCategoryList = (categories, options =[]) => {
        for(let category of categories){
            options.push({value: category._id, name: category.name})
            if(category.children.length > 0){
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }


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
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={show}
                handleClose={handleClose}
                modalSubmit={modalSubmit}
                modalTitle="add new category"
            >
                 <Input
                    value={categoryName}
                    placeholder={"category name"}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <select
                    className="form-control"
                    vlaue={parentCategoryId}
                    onChange={(e) => setParentCategoryId(e.target.value)}>
                    <option>select category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)

                    }
                </select>

                <input style={{ marginTop: 15 }} type="file" name="categoryImage" onChange={handleCategoryImage}></input>

            </Modal>
           
        </Layout>
    )
}

export default Category
