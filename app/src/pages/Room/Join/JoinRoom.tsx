import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IJoinRoomData } from 'types/Room';
import { useNavigate } from 'react-router-dom';
import JoinRoomDesktop from './JoinRoomDesktop';
import { useMediaQuery } from '@mui/material';
import JoinRoomMobile from './JoinRoomMobile';

const joinRoomSchema = z.object({
    code: z.string().length(6),
});

const JoinRoom: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    const { register, handleSubmit } = useForm<IJoinRoomData>({
        resolver: zodResolver(joinRoomSchema),
    });

    const navigate = useNavigate();

    const handleJoinRoom = (data: IJoinRoomData) => {
        navigate(`/room/view/${data.code}`);
    };

    return (
        <>
            {isMobile ? (
                <JoinRoomMobile
                    handleSubmit={handleSubmit}
                    handleJoinRoom={handleJoinRoom}
                    register={register}
                />
            ) : (
                <JoinRoomDesktop
                    handleSubmit={handleSubmit}
                    handleJoinRoom={handleJoinRoom}
                    register={register}
                />
            )}
        </>
    );
};

export default JoinRoom;
