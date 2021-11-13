const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


/* -------------------------------------------------------------------------- */
/*                                user sign up                                */
/* -------------------------------------------------------------------------- */


exports.signup = (req,res) => {
    User.findOne({email:req.body.email}).exec((error,user)=>{
       
        if(error) return res.status(400).json({
            message:error
        })
        if(user) return res.status(400).json({
            message: 'user already exists'
        })

        const {
            firstName,
            lastName,
            email,
            password = password.toString()
        } = req.body
       
        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
        })
        

        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({
                    message:'something wrong'
                })
            }
            if(data){
                return res.status(201).json({
                    message:'user created successfully'
                })
            }
        })

    })

}


/* -------------------------------------------------------------------------- */
/*                                user sign in                                */
/* -------------------------------------------------------------------------- */


exports.signin = (req,res)=>{
    User.findOne({email:req.body.email}).exec((error,user)=>{
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password)){

                const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
                const {
                    _id,
                    firstName,
                    lastName,
                    email,
                    // role,
                    fullName
                } = user
                res.status(200).json({
                    token,
                    user:{
                        _id,
                        firstName,
                        lastName,
                        email,
                        // role,
                        fullName
                    }
                })


            }else{
                return response.status(400).json({
                    message:'invalid password'
                })
            }
        }else{
            return res.status(400).json({
                message:"something went wrong"
            })
        }
    })
}

/* -------------------------------------------------------------------------- */
/*                         checking whether signed in                         */
/* -------------------------------------------------------------------------- */

exports.isSignedIn = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    const user = jwt.verify(token,process.env.JWT_SECRET)
    
    console.log(user);
    req.user = user;

    next();
}