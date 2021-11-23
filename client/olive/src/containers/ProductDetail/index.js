import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllProducts, getProduct, getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig';
import './style.css'

function ProductDetail(props) {

    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch();

    const { id } = useParams()

    useEffect(() => {
        console.log("id")

        dispatch(getProduct(id))
    }, [])
    if (product.name) {
        return (
            <Layout>
                <Container>
                    <Row>
                        <Col md={12}>
                            

                                <div className="productmain" style={{ display: 'flex' }}>
                                    {

                                        <div className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productImage[0].img)} alt=""></img>
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>
                                                    {product.name}
                                                </div>
                                                <div>
                                                    <span>4.3 </span>
                                                    <span>3333</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>
                                        </div>

                                    }
                                    <Link to="/cart">Cart</Link>

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
