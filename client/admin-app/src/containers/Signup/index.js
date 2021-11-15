import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../../components/UI/Input'

function Signup(props) {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "5vh" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row className="">
                                    <Col md={6}>
                                        <Input
                                            label="First Name"
                                            type="text"
                                            placeholder="Enter first name"
                                            value=""
                                            onChange={() => { }}
                                        />


                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Last Name"
                                            type="text"
                                            placeholder="Enter last name"
                                            value=""
                                            onChange={() => { }}
                                        />
                                    </Col>
                                </Row>
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

export default Signup

