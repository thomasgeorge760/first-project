import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Header from '../header'
import './style.css'

function Layout(props) {
    return (
        <div>
            <Header></Header>
            {
                props.sidebar ? 
                <Container fluid>
                    <Row>
                        <Col md={2} className="sidebar">
                            <ul>
                                
                                <li><NavLink className="link" to="/">Home</NavLink></li>
                                <li><NavLink className="link" to={'/products'}>Products</NavLink></li>
                                <li><NavLink className="link" to={'/orders'}>Orders</NavLink></li>
                                <li><NavLink className="link" to={'/salesreport'}>Sales report</NavLink></li>
                                <li><NavLink className="link" to={'/category'}>Category</NavLink></li>
                                <li><NavLink className="link" to={'/products'}>Products</NavLink></li>
                            </ul>
                        </Col>
                        <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>{props.children}</Col>
                    </Row>
                </Container>
                :
                props.children
            }
            

        </div>
    )
}

export default Layout;