const express=require('express');
const router=express.Router();
const userModel=require('../Models/users');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');


router.post('/register',async(req,res)=>{
const {username,password,confirm,email}=req.body;
if(password !== confirm) return res.status(400).send('Passwords do not match');
const check_user=await userModel.findOne({email:email.toLowerCase()});
if(check_user)return res.status(400).send('User is already registered');

const hashedPassword=await bcrypt.hash(password,12);
const hashedConfirm=await bcrypt.hash(confirm,12);
const user=await userModel.create({
    username,
    password:hashedPassword,
    confirm:hashedConfirm,
    email
})
res.send('User successfully registered');

})

router.post('/login', async (req, res) => {

     // const authToken=req.headers['x-auth-token'];
    // console.log(authToken)
  
    const { password, email } = req.body;
    
    const check_user = await userModel.findOne({ email });
    if (!check_user) return res.status(400).send('Invalid Email or Password');

    const check_password = await bcrypt.compare(password, check_user.password);
   if(!check_password)return res.status(400).send('Invalid Email or Password');
  
    const token=jwt.sign({
        _id:check_user._id,
        username:check_user.username
    }, config.get('secret_jwt_key'))
    res.send(token);

})

module.exports=router;