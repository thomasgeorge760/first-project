import { combineReducers } from 'redux'

import categoriesReducer from './categories.reducers'


const rootReducer = combineReducers({
  
    category: categoriesReducer
})

export default rootReducer