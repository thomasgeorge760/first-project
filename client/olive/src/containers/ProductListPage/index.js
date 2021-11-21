import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig';
import './style.css'

function ProductListPage(props) {

    const product = useSelector(state => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props)

        dispatch(getProductsBySlug(window.location.pathname))
    }, [])

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>{window.location.pathname}Jeans</div>
                                <button>View all</button>
                            </div>
                            <div style={{display:'flex'}}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div className="productContainer">
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
                                    )
                                }

                            </div>

                        </div>
                    )
                })
            }

        </Layout>
    )
}

export default ProductListPage
