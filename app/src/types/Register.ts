import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterScreen {
  handleSubmit: UseFormHandleSubmit<IRegisterData, undefined>;
  register: UseFormRegister<IRegisterData>;
  handleRegister: (data: IRegisterData) => void
}

export interface IRegisterResponse {
  access_token: string;
}
