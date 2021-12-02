const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    addressId: {
        type : String,
        required : true
    },
    items: {
        
        required: true,
        
    },
    totalPrice: {
        type: Number,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Order', orderSchema)