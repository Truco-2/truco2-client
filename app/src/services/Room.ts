import { AxiosResponse } from 'axios';

import { CREATE_ROOM_PATH, JOIN_ROOM_PATH, LIST_ROOM_PATH } from 'helpers/apiHelper';
import { axiosInstance } from 'helpers/axiosHelper';

import { ICreateRoomData } from 'types/Room';

interface ICallback {
    (response: AxiosResponse): void;
}

export const getRooms = (callback: ICallback) => {
    console.log('chamando axios instance');

    axiosInstance
        .get(LIST_ROOM_PATH)
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response.error);
        });
};

export const createRoom = (callback: ICallback, data: ICreateRoomData) => {
    axiosInstance
        .post(CREATE_ROOM_PATH, data)
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response.error);
        });
};

export const joinRoom = (callback: ICallback, code: string) => {
    axiosInstance
        .post(JOIN_ROOM_PATH, false , {
            params: {
                code
            }
        })
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response.error);
        });
}
