import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ILoginScreen {
    handleSubmit: UseFormHandleSubmit<ILoginData, undefined>;
    handleLogin: (data: ILoginData) => void;
    register: UseFormRegister<ILoginData>;
    handleGuest: () => Promise<void>;
}

export interface IGuestResponse {
    access_token: string;
}

export interface ILoginData {
    email: string;
    password: string;
}