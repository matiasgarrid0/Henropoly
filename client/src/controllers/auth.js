import axios from 'axios';
const axiosApi = axios.create({ baseURL: process.env.REACT_APP_API || 'http://localhost:3001' });

axiosApi.interceptors.request.use((req) => {
    if(localStorage.getItem('access_token')){
        const token = localStorage.getItem('access_token');
        req.headers.Authorization = `Basic ${token}`
    }
    return req;
})

//actions:
export const checkToken = () => axiosApi.post('/auth/check');
export const setDefault = () => axiosApi.get('/cards');