import {axiosInstance as axios } from '../helpers/axios'
import { productConstants } from './constants'

export const addProduct = (form) => {
    return async dispatch => {
        const res = await axios.post('admin/product/create', form)
        console.log(res)
    }
}

export const deleteProduct = (product) => {
    return async dispatch => {
        const res = await axios.post('admin/product/delete',product)
        if(res.status === 200){
            console.log(res)
            dispatch({
                type: productConstants.DELETE_PRODUCT_SUCCESS
                 
            })
        }
    }
}