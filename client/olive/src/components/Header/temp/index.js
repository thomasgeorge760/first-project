import React, { useState } from 'react';
import './style.css';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {

    MaterialInput,
    MaterialButton,
    DropdownMenu
} from '../../MaterialUI';
import { Modal, Button, Dropdown } from 'react-bootstrap';



const Header = (props) => {

    const [loginModal, setLoginModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        


        <div className="header">

            

            <div className="subHeader">
                <div onClick={handleShow} className="logo">
                    <a href="">
                        Olive
                    </a>

                </div>
                <div style={{
                    padding: '0 10px'
                }}>
                    <div className="searchInputContainer">
                        <input
                            type="search"
                            className="searchInput"
                            placeholder={'search for products, brands and more'}
                        />
                        <div className="searchIconContainer">
                            <IoIosSearch style={{
                                color: '#2874f0'
                            }} />
                        </div>

                    </div>
                </div>
                
                <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                
                {/* <div className="rightMenu"> */}
                   


                    {/* <DropdownMenu
                        menu={
                            <a className="loginButton" onClick={() => setLoginModal(true)}>
                                Log in
                            </a>
                        }
                        menus={[
                            { label: 'My Profile', href: '', icon: null },
                            { label: 'Olive Zone', href: '', icon: null },
                            { label: 'Orders', href: '', icon: null },
                            { label: 'Wishlist', href: '', icon: null },


                        ]}
                        firstMenu={
                            <div className="firstmenu">
                                <span>New Customer?</span>
                                <a style={{ color: '#2874f0' }}>Sign Up</a>
                            </div>
                        }
                    /> */}
                    
                    {/* <div>
                        <a className="cart">
                            <IoIosCart />
                            <span style={{ margin: '0 10px' }}>Cart</span>
                        </a>
                    </div>
                </div> */}

            </div>
        </div>
    )

}

export default Header