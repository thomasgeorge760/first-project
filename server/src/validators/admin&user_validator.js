const {check} = require('express-validator');
const {validationResult} = require('express-validator')

exports.userSignupValidate=[
    check('firstName').notEmpty().withMessage('first name is required'),
    check('lastName').notEmpty().withMessage('lastname is required'),
    check('email').isEmail().withMessage('valid email is required'),
    check('password').isLength({min:4}).withMessage('password must be at least 4 charecters'),
    
]
exports.userSignInValidate = [
    check('email').isEmail().withMessage('valid email is required'),
    check('password').notEmpty().withMessage('password must be atleast 4 charecters')
]
exports.adminSignInValidate = [
    check('email').isEmail().withMessage('valid email is required'),
    check('password').notEmpty().withMessage('password must be atleast 4 charecters')
]

exports.isRequestValidated=(req,res,next)=>{
   
    const error = validationResult(req);
   
    if(error.array()[0]){
        
    return res.status(400).json({error:error.array()[0].msg})
    }
    

    next()
}