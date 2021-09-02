import axios from 'axios';
const URL = 'http://localhost:3001';
const axiosApi = axios.create({ baseURL: URL });

axiosApi.interceptors.request.use((req) => {
    if(localStorage.getItem('access_token')){
        const token = localStorage.getItem('access_token');
        req.headers.Authorization = `Basic ${token}`
    }
    return req;
})

//actions:
export const checkToken = () => axiosApi.post('/auth/check');
