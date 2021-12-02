import { axiosInstance as axios } from '../helpers/axios'
import { checkoutConstants } from './constants'

export const addAddress = (form) => {
    
    return async dispatch => {

        dispatch({
            type: checkoutConstants.ADD_ADDRESS_REQUEST
        })

        await axios.post('/cart/checkout/addAddress',form).then(res=>{
            if(res.status===200){

            }
        })
    }
}

export const getAddress = (id) => {
    return async dispatch => {
        dispatch({
            type: checkoutConstants.GET_ADDRESS_REQUEST
        })

        await axios.get(`/cart/checkout/getAddress/${id}`).then(res=>{
            if(res.status===200){
                
                dispatch({
                    type: checkoutConstants.GET_ADDRESS_SUCCESS,
                    payload:res.data.user
                })
            }
        })
    }
}

export const deleteAddress = (ids) => {
    return async dispatch => {
        dispatch({
            type: checkoutConstants.GET_ADDRESS_REQUEST
        })

        await axios.post(`/cart/checkout/deleteAddress`,ids).then(res=>{
            if(res.status===200){
                
                dispatch({
                    type: checkoutConstants.DELETE_ADDRESS_SUCCESS,
                    payload:res.data.user
                })
            }
        })
    }
}