import axios from "axios";


const axiosInstance=axios.create({
    baseURL:'http://localhost:4000/',
    headers:{
        "Content-Type":"Application/json"
    }
})


axiosInstance.defaults.headers.common['x-auth-token']=localStorage.getItem('auth-token') ? localStorage.getItem('auth-token'):''

export default axiosInstance;