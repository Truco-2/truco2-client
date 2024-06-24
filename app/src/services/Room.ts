import { AxiosResponse } from 'axios';

import {
    CREATE_ROOM_PATH,
    EXIT_ROOM_PATH,
    INFORMATION_ROOM_PATH,
    JOIN_ROOM_PATH,
    LIST_ROOM_PATH,
} from 'helpers/apiHelper';
import { axiosInstance } from 'helpers/axiosHelper';

import { ICreateRoomData, IJoinRoomData } from 'types/Room';

interface ICallback {
    (response: AxiosResponse): void;
}

export const getRooms = (callback: ICallback) => {
    axiosInstance
        .get(LIST_ROOM_PATH)
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response);
        });
};

export const createRoom = (callback: ICallback, data: ICreateRoomData) => {
    axiosInstance
        .post(CREATE_ROOM_PATH, data)
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response);
        });
};

export const joinRoom = (callback: ICallback, data: IJoinRoomData) => {
    axiosInstance
        .post(JOIN_ROOM_PATH, data)
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response);
        });
};

export const informationRoom = (callback: ICallback, code: string) => {
    axiosInstance
        .get(INFORMATION_ROOM_PATH, {
            params: {
                code,
            },
        })
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response);
        });
};

export const exitRoom = (callback: ICallback) => {
    axiosInstance
        .post(EXIT_ROOM_PATH)
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response);
        });
};
