import { productConstants } from "../actions/constants"

const initState = {
    products: [],
    productsByPrice: {
        under1000: [],
        under1500: []
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }
            break;
    }
    return state;
}