import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../../components/UI/Input'
import { login } from '../../actions'
import { useDispatch } from 'react-redux'

function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const dispatch = useDispatch()


    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        dispatch(login(user));
    }

    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "5vh" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit = {userLogin}>
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
