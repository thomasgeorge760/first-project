import React from 'react'
import CarousalBanner from '../../components/Carousal'
import Header from '../../components/Header/temp'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import ProductListPage from '../ProductListPage'

function HomePage(props) {
    
    return (

        <Layout>
            <CarousalBanner></CarousalBanner>
            <ProductListPage></ProductListPage>
            <ProductListPage></ProductListPage>
            <ProductListPage></ProductListPage>
        </Layout>
    )
}

export default HomePage
