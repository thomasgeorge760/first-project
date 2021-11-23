import { productConstants } from "../actions/constants"

const initState = {
    products: [],
    productsByPrice: {
        under1000: [],
        under1500: []
    },
    product: {}
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
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case productConstants.GET_SINGLE_PRODUCT_SUCCESS:
            state = {
                ...state,
                product: action.payload.product
            }
    }
    return state;
}