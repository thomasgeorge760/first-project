import { userAuthConstants } from "../actions/constants"

const initState = {
    user:{},
    userToken:'',
    message:''
}

export default (state = initState, action) => {
    switch(action.type){
        case userAuthConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                userToken: action.payload.userToken,
                user: action.payload.user
                
            }
            break;
        case userAuthConstants.LOGIN_FAILURE:
            state = {
                ...state,
                message: action.payload.message
            }
        case userAuthConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                userToken: action.payload.userToken,
                user: action.payload.user
            }
    }
    return state;
}