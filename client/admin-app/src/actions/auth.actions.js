import { authConstants } from "./constants"
import axios from '../helpers/axios'

export const login = (user) => {
    return async (dispatch) => {

        dispatch({type: authConstants.LOGIN_REQUEST});

        const res = await axios.post('/admin/signin',{
            ...user
        });



        if(res.status === 200){
            const { adminToken, admin } = res.data;
            localStorage.setItem('token',adminToken);
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