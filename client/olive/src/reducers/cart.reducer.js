import { cartConstants } from "../actions/constants"

const initState = {
    cart:{},
    isLoading: true,
    loadingComplete: false
}

export default (state = initState, action) => {
    
    switch(action.type) {
        case cartConstants.GET_ALL_CART_ITEMS_SUCCESS:
            state = {
                ...state,
                cart: action.payload
            }
            break;
    }
    return state;
}

