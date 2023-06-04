

 
 import { Box, Button, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../Stylesheet/register.css'
import { Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from './Services/Axios/axios_instance';

import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { insert_user_details } from './Services/Redux_Features/user_auth';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
        username:'',
        confirm:''
    })
    const [isloading, setIsloading] = useState(false);
    const [status, setStatus] = useState()
    const [check, setCheck] = useState(false)
    const[error,setError]=useState('')

    const handleSignUp = async () => {
        if (!user.email || !user.password || !user.confirm || !user.username ) {
          return  alert('please fill up the form');
        }
        setIsloading(true);
        axiosInstance.post('user/auth/register', { email: user.email, password: user.password, username:user.username, confirm:user.confirm }).then((res) => {
            setIsloading(false)
            setStatus(200);
            navigate('/login')

        }).catch((e) => {
             
            setIsloading(false);
            console.log(e);
            setStatus(e.response.status);
            setError(e.response.data);
        });

    }


    return (


        <>

            {isloading === true ? <Box className="loading_gif">
                <img className='loading_spinner' src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
            </Box> : ''}

            <Box mt={4}>

            </Box>

            <Box className='center_box_register' sx={{height:status===400?'590px':'550px'}}  >

                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '2%' }}>
                    <IconButton sx={{ background: 'black', "&": { background: 'black' } }} > <Lock sx={{ fontSize: '35px', color: 'white' }} /> </IconButton>
                </Box>

                <Typography sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}> Register  </Typography>
                <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TextField
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        sx={{ width: '60%' }}
                        variant='outlined'
                        label='Email'
                        type='email'
                        error={status === 400 && error === 'User is already registered' ? true : false}
                        helperText={status === 400 && error === 'User is already registered' ? error : ''}
                        disabled={isloading === true ? true : false}
                    />
                </Box>

                <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TextField
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        sx={{ width: '60%' }}
                        variant='outlined'
                        label='Username'
                        type='text'
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
                        error={status === 400 && error ==='Passwords do not match' ? true : false}
                        helperText={status === 400 && error ==='Passwords do not match'  ? error : ''}
                        disabled={isloading === true ? true : false}
                    />
                </Box>

                <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TextField
                        value={user.confirm}
                        onChange={(e) => setUser({ ...user, confirm: e.target.value })}
                        sx={{ width: '60%' }}
                        variant='outlined'
                        type='password'
                        label='Confirm'
                        error={status === 400 && error === 'Passwords do not match'  ? true : false}
                        helperText={status === 400 && error === 'Passwords do not match' ? error : ''}
                        disabled={isloading === true ? true : false}
                    />
                </Box>

                <Box mt={1} sx={{ display: 'flex', justifyContent: 'center', width: '60%', alignItems: 'center', paddingLeft: '10%' }}>
                    <Checkbox
                        value={check}
                        onChange={() => setCheck(!check)}
                    />
                    <Typography sx={{ fontSize: '11px' }} variant='body2'> Agree to our Terms and Conditions </Typography>
                </Box>
                <Box className='terms_conditions'  mt={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{color:'black',textAlign:'center',fontSize:'11px'}}> Welcome to our service. By using or accessing our service, you agree to be bound by the following terms and conditions: 

                    </Typography>
                </Box>

                <Box mt={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button disabled={check===false? true : isloading===true ? true :false } sx={{ width: '60%', borderRadius: '10px' }} variant='contained' color='primary' onClick={handleSignUp} > Sign Up </Button>
                </Box>

                <Box mt={2} sx={{ display: 'flex', justifyContent: 'flex-end',paddingLeft:'16%' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginInline: '15%' }}>
                        
                        <Link style={{ textDecoration: 'none' }} to='/login'>  <Typography color='primary' variant='body2' > Already Have An Account? Sign In </Typography> </Link>
                    </Box>
                </Box>

            </Box>
        </>

    );




};

export default Register;
