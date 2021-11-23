import { axiosInstance as axios } from "../helpers/axios"
import { productConstants } from "./constants";

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/product${slug}`);
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        }else{
            
        }
        console.log(res)
    }
}

export const getAllProducts = () => {
    return async dispatch => {
        const res = await axios.get(`/product/all`);
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: res.data
            })
        }else{
            
        }
        console.log(res)
    }
}

export const getProduct = (id) => {
    console.log('varunnund')
    return async dispatch => {
        
        const res = await axios.get(`/product/single/${id}`);
        
        console.log(res.data.product)
        if(res.status === 200){
            dispatch({
                type: productConstants.GET_SINGLE_PRODUCT_SUCCESS,
                payload: res.data
            })
        }else{
            
        }
        console.log(res)
    }
}