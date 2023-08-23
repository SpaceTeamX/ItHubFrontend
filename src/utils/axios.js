import axios from 'axios';

const url = axios.create({
    baseURL: 'https://ktotonekt.pythonanywhere.com/api/'
});

url.interceptors.request.use((req) => {
    req.headers.Authorization = 'Token ' + window.localStorage.getItem('token');

    return req;
});

export default url;