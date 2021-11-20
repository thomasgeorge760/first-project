import React from 'react'
import Layout from '../../components/layout'
import { Row, Col, Container } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <Layout sidebar>
                Home
            </Layout>
        </div>
    )
}

export default Home
