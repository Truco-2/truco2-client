import React, {
    PropsWithChildren,
    createContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { API_ROOT_PATH } from 'helpers/apiHelper';
import { getUserToken } from 'helpers/session';

import { Socket, io } from 'socket.io-client';

interface ISocketContextProps {
    socket: Socket | undefined;
}

export const SocketContext = createContext({} as ISocketContextProps);

export const SocketProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [socket, setSocket] = useState<Socket>();

    const client = useMemo(() => {
        return io(`${API_ROOT_PATH}/room`, {
            reconnection: false,
            extraHeaders: {
                authorization: getUserToken(),
            },
        });
    }, []);

    useEffect(() => {
        client.connect();

        console.log('client at context: ', client);

        client.on('connect', () => {
            console.log('conected');

            setSocket(client);
        });

        client.on('disconnect', () => {
            console.log('disconected');
        });

        client.on('error', () => {
            console.log('error');
        });

        return () => {
            client.disconnect();
        };
    }, [client]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
