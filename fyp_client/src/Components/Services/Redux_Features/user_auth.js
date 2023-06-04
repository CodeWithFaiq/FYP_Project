import { createSlice } from "@reduxjs/toolkit";



const user_auth=createSlice({
    initialState:{
        user:{}
    },
    name:'user-auth',
    reducers:{
    
        insert_user_details:(state,action)=>{
            state.user=action.payload;
        },
        signingOut:(state,action)=>{
            state.user={};
        }
    }
})

export const{insert_user_details,signingOut}=user_auth.actions

export default user_auth.reducer