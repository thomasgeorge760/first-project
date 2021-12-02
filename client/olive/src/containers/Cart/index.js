import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkoutCart, getCart, getProduct } from '../../actions'
import Layout from '../../components/Layout'
import Checkout from '../Checkout'
// import ProductDetail from '../ProductDetail'
import './style.css'

function Cart() {

    const user = JSON.parse(localStorage.getItem('user'))
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();

    // console.log(cart)

    let cartTotal = 0
    
    useEffect(() => {

        if (user)
            dispatch(getCart(user._id))

    },[])

    const productDetail = (id) => {
        
        dispatch(getProduct(id))
    }

    const productImage = () => {
        return <p>hello</p>
    }

    const RenderCartItems = () => {



        // console.log(product)
        if (cart.cartItems) {


            return (
                <Table style={{ fontSize: 12 }} responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>#</th>
                            <th>Product detail</th>
                            <th>Quantity</th>
                            <th>Unit price</th>
                            <th>Amount</th>





                        </tr>
                    </thead>
                    <tbody>
                        {   
                            
                            cart.cartItems.length > 0 ?
                                cart.cartItems.map(item =>


                                    // <tr onClick={() => showProductDetailsModal(product)}>
                                    <tr style={{}}>
                                        {() =>  productDetail(item.product)}
                                        
                                        
                                        {/* {dispatch(getProduct(item.product))} */}
                                        <td>1</td>
                                        <td>{ productImage() }</td>
                                        <td>{item.product}</td>
                                        <td>
                                            <button className="quantityButton">-</button>
                                            &nbsp;{item.quantity}&nbsp;
                                            <button className="quantityButton">+</button>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{cartTotal+=item.price*item.quantity}</td>
                                        <td><button className="removeButton">Remove</button></td>
                                        {/* <td>{user.isBlocked?<p>hhkjkgj</p>:<p>hhgj</p>}</td> */}

                                        {/* <td><button onClick={() => BlockUser(user)} className="btn btn-danger">{user.isBlocked?<p>unblock</p>:<p>Block</p>}</button></td> */}


                                    </tr>
                                ) : null
                        }


                    </tbody>
                </Table>
            )
        }
        else {
            return <p>add some items to cart</p>
        }
    }


    return (
        <Layout>
            <Container >
                <div className="cartCard">
                    <Row style={{ textAlign: 'center' }}>
                        <h3>Shopping Cart</h3>
                    </Row>
                    <Row>
                        {RenderCartItems()}
                    </Row>
                    <div>
                        <h5>Total amount = {cartTotal}</h5>
                        <Link className="checkoutButton btn btn-success" to="checkout">Checkout</Link>
                    </div>
                </div>


            </Container>
        </Layout>

    )
}

export default Cart
