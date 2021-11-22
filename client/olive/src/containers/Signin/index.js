import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import Input from '../../components/UI/Input'
import { signin } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import Layout from '../../components/Layout'

function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const user = useSelector(state => state.user.user);

    const dispatch = useDispatch()




    const userSignin = (e) => {
        e.preventDefault();
        const user = {
            email,
            password      
        }
        dispatch(signin(user));
    }

    if(user.email){
        return <Navigate to="/" />
    }

    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "5vh" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit = {userSignin}>
                                <Input
                                    label="Email address"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value) }
                                />
                                

                                <Input
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                
                                <Button variant="primary" type="submit">
                                    Log in
                                </Button>
                            </Form>
                        </Col>
                    </Row>


                </Container>
            </Layout>

        </div>
    )
}

export default Signin
