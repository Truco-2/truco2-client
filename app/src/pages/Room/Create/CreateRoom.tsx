import React from 'react';

import { useMediaQuery } from '@mui/material';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ICreateRoomData } from 'types/Room';
import { createRoom } from 'services/Room';
import { useNavigate } from 'react-router-dom';
import CreateRoomMobile from './CreateRoomMobile';
import CreateRoomDesktop from './CreateRoomDesktop';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const roomSchema = z.object({
    name: z.string(),
    maxPlayers: z.coerce.number().gte(2).lte(7),
    isPrivate: z.boolean(),
    password: z.string().optional(),
});

const CreateRoom: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    const { register, handleSubmit, watch } = useForm<ICreateRoomData>({
        resolver: zodResolver(roomSchema),
        defaultValues: {
            isPrivate: false,
        },
    });

    const navigate = useNavigate();

    const handleCreateRoom = async (data: ICreateRoomData) => {
        await createRoom((response) => {
            const code = response?.data?.data?.code;

            console.log('code: ', code);

            if (response.status === 201) {
                navigate(`/room/${code}`);
            } else {
                toast.error(
                    'Could not create room, please check room data and if you are already in a room. ',
                    {
                        position: 'top-right',
                        closeOnClick: true,
                        autoClose: 5000,
                        draggable: true,
                        theme: 'dark',
                    }
                );
            }
        }, data);
    };

    return (
        <>
            {isMobile ? (
                <CreateRoomMobile
                    handleSubmit={handleSubmit}
                    handleCreateRoom={handleCreateRoom}
                    register={register}
                    watch={watch}
                />
            ) : (
                <CreateRoomDesktop
                    handleSubmit={handleSubmit}
                    handleCreateRoom={handleCreateRoom}
                    register={register}
                    watch={watch}
                />
            )}
            <ToastContainer />
        </>
    );
};

export default CreateRoom;
