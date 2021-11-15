import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../../components/UI/Input'

function Signin(props) {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "5vh" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Input
                                    label="Email address"
                                    type="email"
                                    placeholder="Enter email"
                                    value=""
                                    onChange={() => { }}
                                />
                                

                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    value=""
                                    onChange={() => { }}
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
