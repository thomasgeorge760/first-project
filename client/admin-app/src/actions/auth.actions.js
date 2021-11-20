import { authConstants } from "./constants"
import {axiosInstance as axios } from '../helpers/axios'

export const signin = (admin) => {
    return async (dispatch) => {

        dispatch({type: authConstants.LOGIN_REQUEST});

        const res = await axios.post('/admin/signin',{
            ...admin
        });



        if(res.status === 200){
            const { adminToken, admin } = res.data;
            localStorage.setItem('adminToken',adminToken);
            localStorage.setItem('admin', JSON.stringify(admin))
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    adminToken,admin
                }
            })
        }else{
            if(res.status === 400){
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
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
        const adminToken = localStorage.getItem('adminToken');
        if(adminToken){
            const admin = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    adminToken,admin
                }
            })
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
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
            type: authConstants.LOGOUT_REQUEST
        })

        const res = await axios.post('/admin/signout');

        if(res.status === 200 ){
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS
            })
        }else{
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            })
        }

        

       
    }
}

// export const signup = (user) => {
//     return async (dispatch) => {

//         dispatch({type: authConstants.SIGNUP_REQUEST});

//         const res = await axios.post('/signup',{
//             ...user
//         });



//         if(res.status === 201){
//             const { token, user } = res.data;
//             localStorage.setItem('token',token);
//             localStorage.setItem('user', JSON.stringify(user))
//             dispatch({
//                 type: authConstants.SIGNUP_SUCCESS,
//                 payload: {
//                     token,user
//                 }
//             })
//         }else{
//             if(res.status === 400){
//                 dispatch({
//                     type: authConstants.SIGNUP_FAILURE,
//                     payload: {
//                         error: res.data.error
//                     }
//                 })
//             }
//         }

       
//     }
// }