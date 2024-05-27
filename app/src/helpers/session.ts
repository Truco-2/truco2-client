import { getCookies} from './cookies'

import {jwtDecode} from 'jwt-decode';

interface IJWTData {
   "username": string,
    "sub": number,
    "iat": number,
    "exp": number
}

export const userInformations = (): IJWTData => {
    const userToken = getCookies('userToken');

    console.log('userToken: ', userToken);

    const decode: IJWTData = jwtDecode(userToken);

    console.log('decode: ', decode);
    
    return decode;
}