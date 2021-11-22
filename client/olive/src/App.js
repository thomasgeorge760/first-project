import React, { useEffect } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './containers/ProductListPageSlug';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './containers/Signin';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';

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

          {/* <Route path="/" element={<PrivateRoute />} >
          
          </Route> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="productlistbyslug/:slug" element={<ProductListPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
