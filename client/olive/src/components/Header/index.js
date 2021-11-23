import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signout } from '../../actions';
import './style.css'

function Header(props) {

    const userEmail = localStorage.getItem('userEmail')
    const userFirstName = localStorage.getItem('userFirstName')
    

    const dispatch = useDispatch();

    const userSignout = () => {
        dispatch(signout())
        window.location.reload()
      }
    
      const renderNonLoggedInLinks = () => {
        return (
          <Nav>
            <NavLink className="nav-link" to="/signin">Sign in</NavLink>
            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
          </Nav>
        );
      }
    
      const renderLoggedInLinks = () => {
        return (
          <Nav>
            
            <span className="nav-link signout button" onClick={userSignout} >Sign out</span>
            
          </Nav>
        );
      }
    

    return (
        <div className="header">
            <div className="headerLeft">
              <Link className="link" to="/">
                <p>Olive</p>
                </Link>
            </div>
            <div className="headerMiddle">
                <input placeholder="Shirt, jeans etc" type="search"></input>
                <button>Search</button>
            </div>
            <div className="headerRight">
                <div className="dropdown">
                    <button className="dropbtn">more</button>
                    <div className="dropdown-content">

                    {userEmail ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                        

                        <a href="#">Offers</a>
                    </div>
                </div>
                <div className="greeting">
                    {userEmail ? `hai, ${userFirstName}` : null}
                </div>

            </div>




        </div>
    )
}

export default Header