import { userConstants } from "./constants"
import { axiosInstance as axios } from '../helpers/axios'

export const signup = (user) => {
    return async (dispatch) => {

        dispatch({type: userConstants.SIGNUP_REQUEST});

        const res = await axios.post('/signup',{
            ...user
        });



        if(res.status === 201){
            const { token, user } = res.data;
            localStorage.setItem('token',token);
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: userConstants.SIGNUP_SUCCESS,
                payload: {
                    token,user,
                    message:'user created'
                }
            })
        }else{
            if(res.status === 400){
                dispatch({
                    type: userConstants.SIGNUP_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

       
    }
}

export const blockUser = (user) => {
    return async (dispatch) => {

        dispatch({type: userConstants.BLOCK_USER_REQUEST});

       

        const res = await axios.post('/admin/blockUser',{
            ...user
        });



        if(res.status === 201){
            const { token, user } = res.data;
            localStorage.setItem('token',token);
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: userConstants.SIGNUP_SUCCESS,
                payload: {
                    token,user,
                    message:'user created'
                }
            })
            
        }else{
            if(res.status === 400){
                dispatch({
                    type: userConstants.SIGNUP_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

       
    }
}