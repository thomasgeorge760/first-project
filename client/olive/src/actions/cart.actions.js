import { axiosInstance as axios } from '../helpers/axios'
import { cartConstants } from "./constants"


export const addProductToCart = (data) => {
    
    return async dispatch => {

        dispatch({
            type: cartConstants.ADD_TO_CART_REQUEST
        })

        await axios.post('/cart/add',{
            ...data
        })
    }
}

export const getCart = (id) => {
    
    return async dispatch => {
        
        const res = await axios.get(`/cart/${id}`);
        
        
        if(res.status === 200){
            dispatch({
                type: cartConstants.GET_ALL_CART_ITEMS_SUCCESS,
                payload: res.data.cart
            })
        }else{
            console.log(res)
        }
        
    }
}

export const checkoutCart = (id) => {
    
    return async dispatch => {
        
        const res = await axios.post(`/cart/checkout`,{id});
        
        
        if(res.status === 200){
            dispatch({
                type: cartConstants.GET_ALL_CART_ITEMS_SUCCESS,
                payload: res.data.cart
            })
        }else{
            console.log(res)
        }
        
    }
}

export const addOrder = (data) => {
    
    return async dispatch => {
        
        const res = await axios.post(`/cart/checkout/addorder`,data);
        
        
        if(res.status === 200){
            dispatch({
                type: cartConstants.GET_ALL_CART_ITEMS_SUCCESS,
                payload: res.data.cart
            })
        }else{
            console.log(res)
        }
        
    }
}