import { getCookies } from './cookies';

import { jwtDecode } from 'jwt-decode';

interface IJWTData {
    username: string;
    sub: number;
    iat: number;
    exp: number;
}

export const getUserToken = () => {
    const userToken = getCookies('userToken');

    return userToken;
};

export const userInformations = (): IJWTData => {
    const decode: IJWTData = jwtDecode(getUserToken());

    return decode;
};
