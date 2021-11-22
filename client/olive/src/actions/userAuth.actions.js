import { userAuthConstants } from "./constants"
import {axiosInstance as axios } from '../helpers/axios'

export const signin = (user) => {
    return async (dispatch) => {

        dispatch({type: userAuthConstants.LOGIN_REQUEST});

        const res = await axios.post('/signin',{
            ...user
            
        });



        if(res.status === 200){
            const { userToken, user } = res.data;
            localStorage.setItem('userToken',userToken);
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: userAuthConstants.LOGIN_SUCCESS,
                payload: {
                    userToken,user
                }
            })
        }else{
            if(res.status === 400){
                dispatch({
                    type: userAuthConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

       
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const userToken = localStorage.getItem('userToken');
        if(userToken){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: userAuthConstants.LOGIN_SUCCESS,
                payload: {
                    userToken,user
                }
            })
        }else{
            dispatch({
                type: userAuthConstants.LOGIN_FAILURE,
                payload: {
                    error: 'failed to signin'
                }
            })
        }
    }
}

export const signout = () => {
    return async dispatch => {

        dispatch({
            type: userAuthConstants.LOGOUT_REQUEST
        })

        const res = await axios.post('/signout');

        if(res.status === 200 ){
            localStorage.clear();
            dispatch({
                type: userAuthConstants.LOGOUT_SUCCESS
            })
        }else{
            dispatch({
                type: userAuthConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            })
        }

        

       
    }
}

export const signup = (user) => {
    return async (dispatch) => {

        dispatch({type: userAuthConstants.SIGNUP_REQUEST});

        const res = await axios.post('/signup',{
            ...user
        });



        if(res.status === 201){
            const { userToken, user } = res.data;
            localStorage.setItem('userToken',userToken);
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: userAuthConstants.SIGNUP_SUCCESS,
                payload: {
                    userToken,user
                }
            })
        }else{
            if(res.status === 400){
                dispatch({
                    type: userAuthConstants.SIGNUP_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

       
    }
}