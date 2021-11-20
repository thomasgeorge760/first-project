const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const shortId = require('shortid')



/* -------------------------------------------------------------------------- */
/*                                user sign up                                */
/* -------------------------------------------------------------------------- */


exports.signup = (req,res) => {

    

    User.findOne({email:req.body.email}).exec(async(error,user)=>{
       
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
       
        const hash_password = await bcrypt.hash(password, 10)

        const _user = new User({
            firstName,
            lastName,
            email,
            hash_password,
            username: shortId.generate()
        })
        

        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({
                    message:'something wrong'
                })
            }
            if(data){
                user=data
                const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
                
                console.log(data)
                return res.status(201).json({
                    token,
                    user
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

                const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
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
                return res.status(400).json({
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
    if(!req.headers.authorization) return res.status(400).json({message:'sign in again'})
    const token = req.headers.authorization.split(" ")[1]
   
    const user = jwt.verify(token,process.env.JWT_SECRET)
    
   
    req.user = user;

    next();
}