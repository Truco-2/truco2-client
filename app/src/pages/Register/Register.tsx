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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            } else {
                toast.error(
                    'Could not sign in, please check your credentials.',
                    {
                        position: 'top-right',
                        closeOnClick: true,
                        autoClose: 2000,
                        draggable: true,
                        theme: 'dark',
                    }
                );
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
            <ToastContainer />
        </React.Fragment>
    );
};

export default Register;
