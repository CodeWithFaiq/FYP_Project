import { configureStore } from "@reduxjs/toolkit";
import user_auth_reducer from './Components/Services/Redux_Features/user_auth'


const store=configureStore({
    reducer:{
     user_auth:user_auth_reducer
    }

})

export default store;