const express=require('express');
const app=express();
const mongoose=require('mongoose');
const config=require('config');
const userAuthRouter=require('./routes/user_auth');
const { json, urlencoded } = require('body-parser');
const cors=require('cors');
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/user/auth',userAuthRouter);


mongoose.connect(config.get('mongoURI')).then(()=>{
    console.log('connected to the database');
}).catch((e)=>{
    console.log('error while connecting to the database' + e);
})


app.listen(4000);