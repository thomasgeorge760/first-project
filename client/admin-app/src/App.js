import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory, getInitialData, isUserLoggedIn } from './actions'
import Products from './containers/products';
import Orders from './containers/orders';
import Category from './containers/category';




function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData())

  })


  return (
    <div className="App">

      
        <Routes>
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="" element={<Home />} />
            <Route path="products" element={<Products/>} />
            <Route path="orders" element={<Orders/>} />
            <Route path="category" element={<Category />} />
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      

    </div>
  );
}

export default App;
