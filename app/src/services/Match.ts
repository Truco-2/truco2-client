import { CREATE_MATCH_PATH } from "helpers/apiHelper";
import { axiosInstance } from "helpers/axiosHelper";
import { ICallback } from "types/Common";

export const createMatch = (callback: ICallback, roomCode: string) => {
    axiosInstance
        .post(CREATE_MATCH_PATH, { roomCode })
        .then((response) => {
            callback(response);
        })
        .catch((response) => {
            callback(response);
        });
}