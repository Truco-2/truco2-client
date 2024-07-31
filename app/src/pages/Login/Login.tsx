import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IGuestResponse, ILoginData, ILoginResponse } from 'types/Login.ts';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { setCookies } from 'helpers/cookies.ts';
import { API_ROOT_PATH, GUEST_LOGIN_PATH } from 'helpers/apiHelper';
import { login } from 'services/Login';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';
import { useMediaQuery } from '@mui/material';
import HeaderMobile from 'components/ui/HeaderMobile/HeaderMobile';

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm<ILoginData>({
        resolver: zodResolver(loginSchema),
    });

    const isMobile = useMediaQuery('(max-width:800px)');

    const navigate = useNavigate();

    const handleLogin = (data: ILoginData) => {
        login((response) => {
            if (response.status === 201) {
                const jwtData: ILoginResponse = response.data.data;

                const decoded = jwtDecode(jwtData.access_token);

                setCookies('userToken', jwtData.access_token, decoded.exp ?? 0);

                navigate('/');
            }
        }, data);
    };

    const handleGuest = async () => {
        const response = await axios.get(
            `${API_ROOT_PATH}/${GUEST_LOGIN_PATH}`
        );

        if (response.status === 200) {
            const jwtData: IGuestResponse = response.data.data;

            const decoded = jwtDecode(jwtData.access_token);

            setCookies('userToken', jwtData.access_token, decoded.exp ?? 0);

            navigate('/');
        }
    };

    return (
        <React.Fragment>
            {isMobile ? (
                <div
                    style={{
                        marginTop: '4rem',
                    }}
                >
                    <HeaderMobile />

                    <LoginMobile
                        handleLogin={handleLogin}
                        handleGuest={handleGuest}
                        register={register}
                        handleSubmit={handleSubmit}
                    />
                </div>
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
