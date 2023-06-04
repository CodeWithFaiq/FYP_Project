import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material";
import '../Stylesheet/menu.css'
import  auctioneer_logo  from '../Assets/Images/auctioneer_logo.png'
import { AccountCircle, Dashboard, DoorBack, MoreVert, Person, Person2, Search, Shop2, ShoppingBag } from "@mui/icons-material";
import { Profiler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_default from '../Assets/Images/default_user.png'
import { signingOut } from "./Services/Redux_Features/user_auth";
const Menubar = () => {

    
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user_auth.user);
    const [anchorEl,setAnchorEl]=useState(null);
    // const [user,setUser]=useState({})
    const [open,setOpen]=useState(false);
    const navigate=useNavigate();
    const [searchbar,setSearchbar]=useState(false);
    const [profile,setProfile]=useState(false);
    const[anchorElProfile,setAnchorElProfile]=useState(null);
    const [openprofile,setOpenProfile]=useState(false);
    const handleProfile=(e)=>{
       setAnchorEl(e.currentTarget);
       setOpen(true);
    }

    const handleLogout=()=>{
        dispatch(signingOut());
        setOpenProfile(false);
    }

    const isLoggedIn=()=>{
        if(user){
            return(
                <>
                    <MenuItem gap={2} sx={{ display: 'flex' }} >  <Person />   <Typography variant='body2' >  Profile </Typography> 
                    
                     </MenuItem>
                    <MenuItem gap={2} sx={{ display: 'flex' }}  > <Dashboard  /> 
                    <Typography variant='body2' >  Dashboard </Typography> 
                 
                </MenuItem>
                    <MenuItem gap={2} sx={{ display: 'flex' }} onClick={handleLogout} > <DoorBack/> <Typography variant='body2' >  Logout </Typography>  </MenuItem>
                </>
            )
        }
    }


    return (<>
           
          

        <AppBar position="static" sx={{ background: '#F8F8F8', borderRadius: '6px', boxShadow: '0px 0px 2px 1px #FEFEFE', height: '14vh',}} >
            <Toolbar className='menu_items'  >
               <img style={{height:'12vh', cursor:'pointer',  }} src={auctioneer_logo} alt='website_logo'  onClick={()=>{navigate('/')}}  />

                <Box gap={2} style={{ display: 'flex' }}>


                    <Link style={{ textDecoration: 'none' }} >   <Typography>  Home  </Typography>  </Link>
                    <Link style={{ textDecoration: 'none' }} >   <Typography>  Feature  </Typography>  </Link>
                    <Link style={{ textDecoration: 'none' }} >   <Typography>  Products  </Typography>  </Link>
                    <Link style={{ textDecoration: 'none' }} >   <Typography>  Categories  </Typography>  </Link>

                </Box>
                
                <Box gap={2} sx={{display:'flex'}} >
                    <Box sx={{ borderRadius: '10px', boxShadow:'1px 0px 3px 1px lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', background:'#c0c1c0'}} >
                  <IconButton onClick={()=>setSearchbar(!searchbar)}> <Search/> </IconButton>
                 </Box>

                    <Box sx={{ borderRadius:'10px', boxShadow: '1px 0px 3px 1px lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#c0c1c0' }} >
                        <IconButton disabled={Object.keys(user).length ===0 ? true:false} > <ShoppingBag /> </IconButton>
                    </Box>
                     {
                        Object.keys(user).length === 0 ? <Box sx={{ borderRadius: '10px', boxShadow: '1px 0px 3px 1px lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#c0c1c0' }} >
                            <IconButton onClick={(e) => { setAnchorEl(e.currentTarget); setOpen(true) }} > <Person2 /> </IconButton>
                        </Box> :(<>
                        
                                <Box className='user_image' sx={{ "&:hover": { cursor: 'pointer' } }}  onClick={(e)=>{setAnchorElProfile(e.currentTarget);setOpenProfile(true)}}  > 
                                    <img  className='user_picture' style={{ height: '5rem',  }} src={user_default}  alt='default_image.png'  />
                            <Box className='user_picture_text' > 
                                    <Typography variant='body2' sx={{ textAlign: 'center', color: 'black' }} > {user.name.split(' ')[0]} </Typography> 
                                    </Box>
                            </Box>
                            
                            </>)
                     }
                  
                </Box>

            </Toolbar>

        </AppBar>

        {searchbar === true ? <Box className='search_bar' sx={{ position: 'absolute', right: '0px', top: '5%' }} > 
            <input type='text' style={{ width: '80%', outline: 'none', border: 'none', background:'#F8F8F8'}}  />
            <Box className='search_button'>
                <IconButton> <Search/> </IconButton>
            </Box>
         </Box> : ''}

        <Menu anchorEl={anchorEl} open={open} onClose={()=>setOpen(false)} >
            <MenuItem onClick={()=>{navigate('/login');setOpen(false)}} > Login  </MenuItem>
            <MenuItem onClick={()=>{navigate('/register');setOpen(false)}}> Register  </MenuItem>
        </Menu>

        <Menu anchorEl={anchorElProfile} open={openprofile} onClose={()=>setOpenProfile(false)}  >
            {isLoggedIn()}
        </Menu>

    </>);
}

export default Menubar;