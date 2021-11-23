import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import { signup } from '../../actions'

function Signup(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user.user);

    const dispatch = useDispatch()

    const userSignup = (e) => {
        e.preventDefault();
        const user = {
            firstName,
            lastName,
            email,
            password
        }
        dispatch(signup(user));
        
    }

    if(user.email){
        return <Navigate to="/" />
    }
    
//     if(user.loading){
//         return (
//             <div class="spinner-border" role="status">
//   <span class="sr-only"></span>
// </div>
//         )
//     }

    return (
        <div>
            <Layout>
                <Container>
                    { user.message }
                    <Row style={{ marginTop: "5vh" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userSignup}>
                                <Row className="">
                                    <Col md={6}>
                                        <Input
                                            label="First Name"
                                            name="firstName"
                                            type="text"
                                            placeholder="Enter first name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />


                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Last Name"
                                            name="lastName"
                                            type="text"
                                            placeholder="Enter last name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Input
                                    label="Email address"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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

export default Signup

