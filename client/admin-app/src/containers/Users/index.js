import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { blockUser } from '../../actions';

import './style.css'


function Users(props) {
    
    const users = useSelector(state => state.listUsers)

    console.log(users)

  

    const dispatch = useDispatch();

    const BlockUser = (user) => {
        
        
        dispatch(blockUser(user))
        
        
    }
   

    const RenderUsers = () => {

        //console.log(product)

        return (
            <Table style={{ fontSize: 12 }} responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>

                        
                        <th>Category</th>
                        <th>Block</th>

                       
                    </tr>
                </thead>
                <tbody>
                    {
                        users.users.length > 0 ?
                        users.users.map(user =>
                                // <tr onClick={() => showProductDetailsModal(product)}>
                                <tr style={{}}>
                                    <td>1</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.isBlocked?<p>hhkjkgj</p>:<p>hhgj</p>}</td>
                                    
                                    <td><button onClick={() => BlockUser(user)} className="btn btn-danger">{user.isBlocked?<p>unblock</p>:<p>Block</p>}</button></td>
                                    

                                </tr>
                            ) : null
                    }


                </tbody>
            </Table>
        )
    }

   


    return (
        <Layout sidebar>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className="categoryDiv">
                            <h3>Users</h3>
                            
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {RenderUsers()}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Users
