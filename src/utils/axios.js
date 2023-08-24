import axios from 'axios';

const url = axios.create({
    baseURL: 'https://ktotonekt.pythonanywhere.com/api/'
});

url.interceptors.request.use(async (req) => {
    const token = await window.localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = 'Token ' + token;
    }

    return req;
});

export default url;
