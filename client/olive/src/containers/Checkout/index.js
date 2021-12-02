import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import Modal from '../../components/UI/modal'
import Input from '../../components/UI/Input';
import Button from '@restart/ui/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, addOrder, deleteAddress, getAddress, getCart } from '../../actions'
import './style.css'

function Checkout(params) {

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('user'))
    const address = useSelector(state => state.checkout.user.address)
    const cart = useSelector(state => state.cart.cart)

    const userId = user._id
    let cartTotal = 0
    let cartitemtotal = 0

    const [show, setShow] = useState(false);
    const [fullName, setFullName] = useState(null)
    const [houseName, setHouseName] = useState(null)
    const [locality, setLocality] = useState(null)
    const [town, setTown] = useState(null)
    const [landmarks, setLandmarks] = useState(null)
    const [pincode, setPincode] = useState(null)

    const [confirmShow, setConfirmShow] = useState(false);


    const [addressChoice, setAddress] = useState()



    /* ----------------------------- handling add address modal ----------------------------- */

    const handleClose = () => {

        setShow(false);
    }
    const handleShow = () => setShow(true);
    const modalSubmit = () => {
        const address = {
            fullName,
            houseName,
            locality,
            town,
            landmarks,
            pincode,
            userId
        }



        dispatch(addAddress(address))

        setFullName('')
        setHouseName('')
        setLocality('')
        setTown('')
        setLandmarks('')
        setPincode()

        setShow(false);
    }


    /* ----------------------------- handling confirm order modal ----------------------------- */

    const handleConfirmClose = () => {

        setConfirmShow(false);
    }
    const handleConfirmShow = () => setConfirmShow(true);
    const modalConfirmSubmit = (addressId) => {
        const data = {
            userId,
            addressId,
            items: cart.cartItems,
            totalPrice: cartTotal
        }



        dispatch(addOrder(data))

        setFullName('')
        setHouseName('')
        setLocality('')
        setTown('')
        setLandmarks('')
        setPincode()

        setShow(false);
    }

    /* -------------------------------------------------------------------------- */
    /*                              add address modal                             */
    /* -------------------------------------------------------------------------- */
    const renderAddAddressModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleClose}
                modalSubmit={modalSubmit}
                modalSubmitLabel="Add address"
                modalSubmitVariant="success"
                modalTitle="add new category"
            >

                <Input
                    label="Full name"
                    value={fullName}
                    placeholder="Full name"
                    onChange={(e) => setFullName(e.target.value)}
                />

                <Input
                    label="House name"
                    value={houseName}
                    placeholder="House name"
                    onChange={(e) => setHouseName(e.target.value)}
                />

                <Input
                    label="Locality"
                    value={locality}
                    placeholder="Locality"
                    onChange={(e) => setLocality(e.target.value)}
                />

                <Input
                    label="Town/city"
                    value={town}
                    placeholder="Town / city"
                    onChange={(e) => setTown(e.target.value)}
                />

                <Input
                    label="Landmarks"
                    value={landmarks}
                    placeholder="If any"
                    onChange={(e) => setLandmarks(e.target.value)}
                />

                <Input
                    label="Pincode"
                    value={pincode}
                    placeholder="Pincode"
                    onChange={(e) => setPincode(e.target.value)}
                />

            </Modal>
        )
    }

    /* -------------------------------------------------------------------------- */
    /*                             confirm order modal                            */
    /* -------------------------------------------------------------------------- */
    const confirmOrderModal = () => {

        const Address = address ? address.filter(item => item._id == addressChoice)[0] : null

        return (
            <Modal
                show={confirmShow}
                handleClose={handleConfirmClose}
                modalSubmit={()=>modalConfirmSubmit(Address._id)}
                modalSubmitLabel="Confirm"
                modalSubmitVariant="success"
                modalTitle="add new category"
            >
                <h5>Delivery address :</h5>
                {Address != null ?

                    <div>
                        {Address.fullName},<br />
                        {Address.houseName},<br />
                        {Address.locality},&nbsp;
                        {Address.town},<br />
                        {Address.landmarks},<br />
                        {Address.pincode},<br />
                    </div>
                    : null
                }
                <h5>Purchase details :</h5>
                <p>Total amount : {carttotal()}</p>
                <p>Total items : {cartItemtotal()}</p>
            </Modal>
        )
    }

    


    useEffect(() => {
        dispatch(getAddress(userId))
        if (user)
            dispatch(getCart(user._id))
        
    }, [address])

    const removeAddress = (id) => {
        if (window.confirm("Are you sure ?")) {
            const ids = {
                userId,
                id
            }

            dispatch(deleteAddress(ids))
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                             getting cart total                             */
    /* -------------------------------------------------------------------------- */

    const carttotal = () => {
        return (
            cart.cartItems?<>
                {cart.cartItems.length > 0 ?
        cart.cartItems.map(item => cartTotal+=item.price*item.quantity) : null}
            </>:null
        )
    }
    const cartItemtotal = () => {
        return (
            cart.cartItems?<>
            {cart.cartItems.length > 0 ?
            cart.cartItems.map(item => cartitemtotal+=item.quantity):null}
            </>:null
        )
    }




    return (
        <Layout>
            <Container >
                <div className="cartCard">
                    <Row style={{ textAlign: 'center' }}>
                        <h3>Checkout</h3>
                    </Row>
                    <Row>
                        <h4>Choose address</h4>
                        {/* {address?address.length>0?address.map(Address=><><input name="address" type="radio"/>{Address.fullName}</>):null:null} */}

                        {address ?
                            address.map(Address => <div className="address-container">
                                <input name="address" onChange={() => setAddress(Address._id)} id={Address._id} type="radio" />
                                <div className="address-text-area">
                                    {Address.fullName},<br />
                                    {Address.houseName},<br />
                                    {Address.locality},&nbsp;
                                    {Address.town},<br />
                                    {Address.landmarks},<br />
                                    {Address.pincode},<br />
                                </div>
                                <button onClick={() => removeAddress(Address._id)} >Remove</button>
                            </div>) : null
                        }


                        {/* {RenderCartItems()} */}
                    </Row>
                    <div>
                        <Button className="placeOrderButton btn btn-warning" onClick={handleShow}>Add address</Button>
                        {addressChoice ? <Button className="placeOrderButton btn btn-success" onClick={handleConfirmShow}>Place order</Button> : null}

                    </div>
                </div>

                {renderAddAddressModal()}
                {confirmOrderModal()}
            </Container>
        </Layout>
    )
}

export default Checkout
