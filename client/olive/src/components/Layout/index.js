import React from 'react'
import Header from '../Header'
import MenuHeader from '../MenuHeader'

function Layout(props) {
    return (
        <div>
            <Header></Header>
            <MenuHeader></MenuHeader>
            {props.children}
        </div>
    )
}

export default Layout
