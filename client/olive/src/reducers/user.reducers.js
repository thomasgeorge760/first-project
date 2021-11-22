import { userAuthConstants } from "../actions/constants"

const initState = {
    user:{},
    userToken:''
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
    }
    return state;
}