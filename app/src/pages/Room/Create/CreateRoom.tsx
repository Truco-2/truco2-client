import React from 'react';

import styles from './CreateRoom.module.scss';

import {
    Box,
    FormControlLabel,
    Typography,
    useMediaQuery,
} from '@mui/material';

import { TextField } from 'components/ui/TextField';
import { StyledSwitch } from 'components/ui/Switch';
import { FormButton } from 'components/ui/Button';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ICreateRoomData } from 'types/Room';
import { createRoom } from 'services/Room';
import { useNavigate } from 'react-router-dom';
import CreateRoomMobile from './CreateRoomMobile';
import CreateRoomDesktop from './CreateRoomDesktop';

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

    const handleCreateRoom = (data: ICreateRoomData) => {
        createRoom((response) => {
            const code = response.data.data.code;

            if (response.status === 201) {
                navigate(`/room/${code}`);
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
        </>
    );
};

export default CreateRoom;
