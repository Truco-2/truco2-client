import axios from 'axios';

import { API_ROOT_PATH } from './apiHelper';
import { getUserToken } from './session';

export const axiosInstance = axios.create({
    baseURL: API_ROOT_PATH,
    headers: {
        Authorization: `Bearer ${getUserToken()}`,
    },
});
