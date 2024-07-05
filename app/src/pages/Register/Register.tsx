import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { register as registerService } from 'services/Register';
import { useMediaQuery } from '@mui/material';
import RegisterMobile from './RegisterMobile';
import RegisterDesktop from './RegisterDesktop';
import { IRegisterData } from 'types/Register';

const registerSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
});

const Register: React.FC = () => {
    const { register, handleSubmit } = useForm<IRegisterData>({
        resolver: zodResolver(registerSchema),
    });

    const isMobile = useMediaQuery('(max-width:800px)');

    const navigate = useNavigate();

    const handleRegister = (data: IRegisterData) => {
        registerService((response) => {
            if (response.status === 201) {
                console.log(response.data);
                navigate('/login');
            }
        }, data);
    };

    return (
        <React.Fragment>
            {isMobile ? (
                <RegisterMobile
                    register={register}
                    handleSubmit={handleSubmit}
                    handleRegister={handleRegister}
                />
            ) : (
                <RegisterDesktop
                    register={register}
                    handleSubmit={handleSubmit}
                    handleRegister={handleRegister}
                />
            )}
        </React.Fragment>
    );
};

export default Register;
