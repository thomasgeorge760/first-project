
const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose')
const app = express();
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')


//routes

const userRoutes = require('./routes/userRoute')
const adminRoutes = require('./routes/adminRoute')
const categoryRoutes = require('./routes/categoryRoute')
const productRoutes = require('./routes/productRoute')
const cartRoutes = require('./routes/cartRoute')
const initialDataRoutes = require('./routes/adminInitialData')
const userCategoryRoutes = require('./routes/userCategoryRoute')
const userProductRoutes = require('./routes/userProductRoute')


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

/* -------------------------------------------------------------------------- */
/*                             middlewares section                            */
/* -------------------------------------------------------------------------- */


app.use(cors({ credentials: true, origin: '*'}))
app.use(cookieParser())
app.use(express.json());

app.use('/public',express.static(path.join(__dirname,'uploads')))

app.use('/',userRoutes);
app.use('/cart',cartRoutes)
app.use('/category',userCategoryRoutes)
app.use('/product',userProductRoutes)

app.use('/admin',adminRoutes)
app.use('/admin/category', categoryRoutes)
app.use('/admin/product', productRoutes)
app.use('/admin',initialDataRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});
