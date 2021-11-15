
const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose')
const app = express();


//routes

const userRoutes = require('./routes/userRoute')
const adminRoutes = require('./routes/adminRoute')
const categoryRoutes = require('./routes/categoryRoute')
const productRoutes = require('./routes/productRoute')

// environment variables
env.config();



/* -------------------------------------------------------------------------- */
/*                             mongodb connection                             */
/* -------------------------------------------------------------------------- */




mongoose.connect(

    //local database

    // 'mongodb://localhost:27017/test',

    //atlas connection

    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.xqu6s.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,

    {
        useNewUrlParser : true,
        useUnifiedTopology : true
        
    }).then(()=>{
        console.log('database connected');
       
    })

app.use(express.json());

app.use('/',userRoutes);

app.use('/admin',adminRoutes)
app.use('/admin/category', categoryRoutes)
app.use('/admin/product', productRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});
