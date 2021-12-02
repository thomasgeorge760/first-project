import { checkoutConstants } from "../actions/constants";

const initState = {
    user: {}
}

export default (state = initState, action) => {
    
    switch(action.type) {
        case checkoutConstants.GET_ADDRESS_SUCCESS:
            state = {
                ...state,
                user: action.payload
            }
            break;
    }
    return state;
}