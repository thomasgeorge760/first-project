import { combineReducers } from 'redux'
import productReucer from './product.reducer'
import categoriesReducer from './categories.reducers'


const rootReducer = combineReducers({
  
    category: categoriesReducer,
    product: productReucer
})

export default rootReducer