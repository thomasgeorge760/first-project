import { combineReducers } from 'redux'
import productReucer from './product.reducer'
import categoriesReducer from './categories.reducers'
import userReducer from './user.reducers'
import cartReducer from './cart.reducer'
import checkoutReducer from './checkout.reducer'


const rootReducer = combineReducers({
  
    category: categoriesReducer,
    product: productReucer,
    user: userReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

export default rootReducer