import React, { useEffect } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './containers/ProductListPageSlug';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import ProductDetail from './containers/ProductDetail';
import Cart from './containers/Cart';
import ProductListPageBySlug from './containers/ProductListPageSlug';
import Checkout from './containers/Checkout';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user)

  // useEffect(() => {
  //   if (!user.email) {
  //     dispatch(isUserLoggedIn());
  //   }
  //   dispatch(getInitialData())

  // })


  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/" element={<PrivateRoute />} >
            <Route path="/cart/checkout" element={<Checkout />} />

          </Route>
          
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/pbs/:slug" element={<ProductListPageBySlug />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
