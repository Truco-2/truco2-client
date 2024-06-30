import React, { useEffect } from 'react';

import { Box } from '@mui/material';

import useSocket from 'hooks/useSocket';

import { userInformations } from 'helpers/session';

import { useParams } from 'react-router-dom';

const Match: React.FC = () => {
    const { socket } = useSocket('match');

    const { id } = useParams();

    const userId = userInformations().sub;

    const handleMatchMsg = (payload: unknown) => {
        console.log('payload: ', payload);
    };

    useEffect(() => {
        if (socket?.connected) {
            socket.emit('enter', {});

            socket.on('match-msg', handleMatchMsg);

            return () => {
                socket.off('match-msg', handleMatchMsg);
            };
        }
    }, [socket, id, userId]);

    return <Box>Match Page</Box>;
};

export default Match;
