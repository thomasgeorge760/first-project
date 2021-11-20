import { combineReducers } from 'redux'
import authReducer from './auth.reducers'
import userReducer from './user.reducers'
import productsReducer from './products.reducers'
import categoriesReducer from './categories.reducers'
import ordersReducer from './orders.reducers'
import listUsersReducer from './listUsers.reducers'
import salesReportReducer from './salesReport.reducers'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoriesReducer,
    products: productsReducer,
    orders: ordersReducer,
    listUsers: listUsersReducer,
    salesReport: salesReportReducer
})

export default rootReducer