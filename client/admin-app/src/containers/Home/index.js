import React from 'react'
import Layout from '../../components/layout'
import { Row, Col, Container } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
import './style.css'

function Home(props) {
    return (
        <div>
            <Layout sidebar>
                <div className="homeContainer">
                    <h2>Welcome Admin</h2>
                </div>
            
            </Layout>
            
        </div>
    )
}

export default Home
