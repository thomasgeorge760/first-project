import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../header'

function Layout(props) {
    return (
        <div>
            <Header></Header>
           {props.children}
            
        </div>
    )
}

export default Layout;