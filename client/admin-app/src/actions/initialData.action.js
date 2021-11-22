import {axiosInstance as axios } from '../helpers/axios'
import { categoryConstants, initialDataConstants, productConstants, userConstants } from "./constants"

export const getInitialData = () => {
    return async dispatch => {
       
        const res = await axios.post('/admin/initialdata')
        if(res.status === 200){
            console.log('hhakjha')
            
            const { categories, products } = res.data
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            })
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products: res.data.products }
            })
            dispatch({
                type: userConstants.GET_ALL_USERS_SUCCESS,
                payload: { users: res.data.users }
            })
        }
        console.log(res)
    }
}