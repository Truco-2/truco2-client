import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { IGuestResponse, ILoginData } from 'types/Login.ts';

import axios from 'axios';

import { jwtDecode } from 'jwt-decode';

import { setCookies } from 'helpers/cookies.ts';
import { API_ROOT_PATH, GUEST_LOGIN_PATH } from 'helpers/apiHelper';

import useIsMobile from 'hooks/UseIsMobile.ts';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm<ILoginData>({
        resolver: zodResolver(loginSchema),
    });

    const { isMobile } = useIsMobile();

    const navigate = useNavigate();

    const handleLogin = (data: ILoginData) => {
        console.log('data: ', data);

        console.log('submit');
    };

    const handleGuest = async () => {
        const response = await axios.get(
            `${API_ROOT_PATH}/${GUEST_LOGIN_PATH}`
        );

        if (response.status === 200) {
            const jwtData: IGuestResponse = response.data;

            console.log('jwt: ', jwtData);

            const decoded = jwtDecode(jwtData.access_token);

            console.log('decoded: ', decoded);

            setCookies('userToken', jwtData.access_token, decoded.exp ?? 0);

            navigate('/');
        }
    };

    return (
        <React.Fragment>
            {isMobile ? (
                <LoginMobile
                    handleLogin={handleLogin}
                    handleGuest={handleGuest}
                    register={register}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <LoginDesktop
                    handleLogin={handleLogin}
                    handleGuest={handleGuest}
                    register={register}
                    handleSubmit={handleSubmit}
                />
            )}
        </React.Fragment>
    );
};

export default Login;
