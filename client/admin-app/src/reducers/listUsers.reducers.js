import { userConstants } from "../actions/constants";

const initState = {
    users: []
}

export default (state=initState, action) => {
    switch(action.type){
        case userConstants.GET_ALL_USERS_SUCCESS:
            
            state = {
                ...state,
                users: action.payload.users
            }
            break;
    }
    return state;
}