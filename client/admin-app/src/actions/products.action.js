import {axiosInstance as axios } from '../helpers/axios'

export const addProduct = (form) => {
    return async dispatch => {
        const res = await axios.post('admin/product/create', form)
        console.log(res)
    }
}