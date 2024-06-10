import { useEffect } from 'react';

import { API_ROOT_PATH } from 'helpers/apiHelper';

import { io } from 'socket.io-client';

import { getUserToken } from 'helpers/session';

const socket = io(`${API_ROOT_PATH}/room`, {
    reconnection: false,
    extraHeaders: {
        authorization: getUserToken(),
    },
});

const useSocket = () => {
    useEffect(() => {
        socket.connect();

        socket.on('connect', () => {
            console.log('conected');
        });

        socket.on('disconnect', () => {
            console.log('disconected');
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return { socket };
};

export default useSocket;
