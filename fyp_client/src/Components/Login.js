import { Box, Button, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../Stylesheet/login.css'
import { Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from './Services/Axios/axios_instance';

import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { insert_user_details } from './Services/Redux_Features/user_auth';
const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const[user,setUser]=useState({
        email:'',
        password:''
    })
    const[isloading,setIsloading]=useState(false);
    const [status,setStatus]=useState()
    const [check,setCheck]=useState(false)

    const handleSignIn=async()=>{
        if(!user.email || !user.password){
            alert('please fill up the form');
        }
        setIsloading(true);
        axiosInstance.post('user/auth/login',{email:user.email,password:user.password}).then((res)=>{
           
            setIsloading(false)
            var token=jwtDecode(res.data);
            dispatch(insert_user_details({name:token.username,_id:token._id}))
            setStatus(200);
            navigate('/')
            
        }).catch((e)=>{
            
            setIsloading(false);
            setStatus(e.response.status);
        });
        
    }
      

           return (


               <>

                   {isloading === true ? <Box className="loading_gif">
                       <img className='loading_spinner' src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
                   </Box>:''}

                   <Box mt={4}>

                   </Box>

                   <Box className='center_box' >

                       <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '2%' }}>
                           <IconButton sx={{ background: 'black', "&": { background: 'black' } }} > <Lock sx={{ fontSize: '35px', color: 'white' }} /> </IconButton>
                       </Box>

                       <Typography sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}> Login  </Typography>
                       <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                           <TextField
                               value={user.email}
                               onChange={(e) => setUser({ ...user, email: e.target.value })}
                               sx={{ width: '60%' }}
                               variant='outlined'
                               label='Email'
                               type='email'
                               error={status === 400 ? true : false}
                               helperText={status === 400 ? 'Invalid Email or Password' : ''}
                               disabled={isloading === true ? true : false}
                           />
                       </Box>

                       <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                           <TextField
                               value={user.password}
                               onChange={(e) => setUser({ ...user, password: e.target.value })}
                               sx={{ width: '60%' }}
                               variant='outlined'
                               type='password'
                               label='Password'
                               error={status === 400 ? true : false}
                               helperText={status === 400 ? 'Invalid Email or Password' : ''}
                               disabled={isloading===true?true:false}
                           />
                       </Box>

                       <Box mt={2} sx={{ display: 'flex', justifyContent: 'center', width: '60%', alignItems: 'center', paddingLeft: '1%' }}>
                           <Checkbox
                               value={check}
                               onChange={() => setCheck(!check)}
                           />
                           <Typography sx={{ fontSize: '11px' }} variant='body2'> Remember Me </Typography>
                       </Box>

                       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                           <Button disabled={isloading===true?true:false} sx={{ width: '60%', borderRadius: '10px' }} variant='contained' color='primary' onClick={handleSignIn} > Sign In </Button>
                       </Box>

                       <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                           <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginInline: '15%' }}>
                               <Typography sx={{ marginLeft: '15px' }} color='primary' variant='body2' > Forgot Password? </Typography>
                               <Link style={{ textDecoration: 'none' }} to='/register'>  <Typography color='primary' variant='body2' > Dont have an account? Sign up </Typography> </Link>
                           </Box>
                       </Box>

                   </Box>
               </>

           );

       

    
};

export default Login;
