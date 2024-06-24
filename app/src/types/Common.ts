import { AxiosResponse } from "axios";

export interface ICallback {
    (response: AxiosResponse): void;
}