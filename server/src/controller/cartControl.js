const Cart = require('../models/cartModel')
const User = require('../models/userModel')


exports.addToCart = (req, res) => {

    Cart.findOne({ user: req.body.user._id }).exec((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
            /* ------------------------- if cart already exists ------------------------- */

            const item = cart.cartItems.find(c => c.product == req.body.cartItems.product);



            if (item) {

                Cart.findOneAndUpdate({ user: req.body.user._id, "cartItems.product": req.body.cartItems.product }, {
                    "$set": {
                        "cartItems.$": {
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                }).exec((error, _cart) => {


                    if (error) return res.status(400).json({ error });
                    if (_cart) {

                        return res.status(201).json({ _cart })
                    }
                })

            } else {
                Cart.findOneAndUpdate({ user: req.body.user._id }, {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                }).exec((error, _cart) => {
                    if (error) return res.status(400).json({ error });
                    if (_cart) {
                        return res.status(201).json({ cart })
                    }
                })
            }



            //res.status(200).json({message:"already"})
        } else {
            /* -------------------------- if cart doesnt exists ------------------------- */
            const cart = new Cart({
                user: req.body.user._id,
                cartItems: [req.body.cartItems]
            })



            cart.save((error, cart) => {
                if (error) return res.status(400).json({ error })
                if (cart) {
                    return res.status(201).json({ cart })
                }
            })

        }
    })


    //res.status(200).json({message:"cart"})
}

exports.getCart = (req, res) => {

    Cart.findOne({ user: req.params.id }).exec((error, cart) => {
        if (error) return res.status(400).json({ error })
        if (cart) return res.status(200).json({ cart })
        else return res.status(400).json({ message: "some error happened check server" })
    })
}

exports.addAddress = (req, res) => {

    const { fullName, houseName, locality, town, landmarks, pincode, userId } = req.body


    User.findOne({ _id: userId }).exec((error, user) => {
        if (error) return res.status(400).json({ error })
        if (user.address[0]) {
            User.findOneAndUpdate({ _id: userId }, {
                "$push": {
                    address: {
                        fullName,
                        houseName,
                        locality,
                        town,
                        landmarks,
                        pincode
                    }
                }
            }).exec((error, user) => {
                if (error) return res.status(400).json({ error })
                if (user) {

                    return res.status(200).json({ user })
                }else return res.status(400).json({ message: 'something went wrong' })
            })
        } else {
            User.findOneAndUpdate({ _id: userId }, {
                "$set": {
                    address: {
                        fullName,
                        houseName,
                        locality,
                        town,
                        landmarks,
                        pincode
                    }
                }
            }).exec((error, user) => {
                if (error) return res.status(400).json({ error })
                if (user) {

                    return res.status(200).json({ user })
                }else return res.status(400).json({ message: 'something went wrong' })
            })
        }
    })
}

exports.getAddress = (req,res) => {
    
    User.findOne({ _id: req.params.id }).exec((error, user) => {
        if (error) return res.status(400).json({ error })
        if (user) {
            return res.status(200).json({user})
        }else{
            return res.status(400).json({message:'something went wrong'})
        }
    })
}

exports.deleteAddress = (req,res) => {

    
    const {userId, id} = req.body
    
    User.updateOne({ _id: userId },{$pull:{address:{_id:id}}}).exec((error, user) => {
        if (error) return res.status(400).json({ error })
        if (user) {
            
            return res.status(200).json({user})
        }else{
            return res.status(400).json({message:'something went wrong'})
        }
    })
}