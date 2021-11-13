const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')





/* -------------------------------------------------------------------------- */
/*                                admin sign in                                */
/* -------------------------------------------------------------------------- */


exports.signin = (req,res)=>{
    Admin.findOne({email:req.body.email}).exec((error,admin)=>{
        if(error) return res.status(400).json({error})
        if(admin){
            if(admin.authenticate(req.body.password)){

                const adminToken = jwt.sign({_id:admin._id},process.env.JWT_SECRET,{expiresIn:'1h'})
                const {
                    _id,
                    firstName,
                    lastName,
                    email,
                    // role,
                    fullName
                } = admin
                res.status(200).json({
                    adminToken,
                    admin:{
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
    const adminToken = req.headers.authorization.split(" ")[1]
    const admin = jwt.verify(adminToken,process.env.JWT_SECRET)
    
    console.log(admin);
    req.admin = admin;

    next();
}