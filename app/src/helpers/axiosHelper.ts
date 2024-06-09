import axios from 'axios';

import { API_ROOT_PATH } from './apiHelper';

import { getUserToken } from './session';

export const axiosInstance = axios.create({
    baseURL: API_ROOT_PATH,
});

axiosInstance.interceptors.request.use((req) => {
    console.log('interceptors');

    req.headers.Authorization = `Bearer ${getUserToken()}`;

    return req;
});
