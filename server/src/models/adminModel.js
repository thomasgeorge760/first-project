const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
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
    // adminname:{
    //     type:String,
    //     required:true,
    //     trim:true,
    //     unique:true,
    //     index:true
    // },
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
    //     default:'admin'
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


adminSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password,10);
})


/* -------------------------------------------------------------------------- */
/*                             creating full name                             */
/* -------------------------------------------------------------------------- */


adminSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

/* -------------------------------------------------------------------------- */
/*                 comparing entered password with db password                */
/* -------------------------------------------------------------------------- */

adminSchema.methods = {
    authenticate: async function(password){
        
        return await bcrypt.compare(password,this.hash_password)
    }
}

module.exports = mongoose.model('Admin',adminSchema)