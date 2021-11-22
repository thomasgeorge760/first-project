import { combineReducers } from 'redux'
import productReucer from './product.reducer'
import categoriesReducer from './categories.reducers'
import userReducer from './user.reducers'


const rootReducer = combineReducers({
  
    category: categoriesReducer,
    product: productReucer,
    user: userReducer
})

export default rootReducer