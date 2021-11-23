import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavigationType } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllProducts, getProduct, getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig';
import ProductDetail from '../ProductDetail';

import './style.css'

function ProductListPage(props) {

    const product = useSelector(state => state.product)
    const dispatch = useDispatch();

    useEffect(() => {


        dispatch(getAllProducts())
    }, [])

    const productDetail = (product) => {

    }

    return (<>
       
        <div className="container">
            <div className="Card">
                <div className="cardHeader">
                    <p>New arrivals</p>
                    <button>View all</button>
                </div>
                <div className="productmain" style={{ display: 'flex' }}>
                    {
                        product.products.map(product =>
                             <Link className="link" to={`/product/${product._id}`}>
                            <div key={product._id} className="productContainer">
                                <div className="productImgContainer">
                                    <img src={generatePublicUrl(product.productImage[0].img)} alt=""></img>
                                </div>
                                <div className="productInfo">
                                    <div style={{ margin: '5px 0' }}>
                                        {product.name}
                                    </div>
                                    <div>
                                        <span>4.3 </span>
                                        <span>3333</span>
                                    </div>
                                    <div className="productPrice">{product.price}</div>
                                </div>
                            </div>
                             </Link>
                        )
                    }

                </div>

            </div>
        </div>
    </>
    )
}

export default ProductListPage
