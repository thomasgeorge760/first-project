import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../../components/UI/Input'
import { signin } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'

function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch()




    const adminSignin = (e) => {
        e.preventDefault();
        const admin = {
            email,
            password
        }
        dispatch(signin(admin));
    }

    if(auth.authenticate){
        return <Navigate to="/" />
    }

    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "5vh" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit = {adminSignin}>
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
                                    Submit
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
