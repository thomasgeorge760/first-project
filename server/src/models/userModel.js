const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trime:true
    },
    lastName:{
        type:String,
        required:true,
        trime:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    hash_password:{
        type:String,
        required:true
    },
    // role:{
    //     type:String,
    //     enum:['user','admin'],
    //     default:'user'
    // },
    contactNumber:{
        type:String
    },
    profilePicture:{
        type:String
    }
},{timestamps:true})


/* -------------------------------------------------------------------------- */
/*                              password hashing                              */
/* -------------------------------------------------------------------------- */


userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password,10);
})


/* -------------------------------------------------------------------------- */
/*                             creating full name                             */
/* -------------------------------------------------------------------------- */


userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

/* -------------------------------------------------------------------------- */
/*                 comparing entered password with db password                */
/* -------------------------------------------------------------------------- */

userSchema.methods = {
    authenticate: function(password){
        
        return bcrypt.compareSync(password,this.hash_password)
    }
}

module.exports = mongoose.model('User',userSchema)