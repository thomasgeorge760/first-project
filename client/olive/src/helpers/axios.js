import axios from 'axios'
import { api } from '../urlConfig'

const adminToken = localStorage.getItem('adminToken')

export const axiosInstance = axios.create({
    baseURL: api,headers: {
        "Authorization": adminToken ? `Bearer ${adminToken}` : ''
    }
});


// axiosInstance.defaults.withCredentials = true;

// export default axiosInstance;