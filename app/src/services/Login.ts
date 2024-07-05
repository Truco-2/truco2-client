import { LOGIN_PATH } from "helpers/apiHelper";
import { axiosInstance } from "helpers/axiosHelper";
import { ICallback } from "types/Common";
import { ILoginData } from "types/Login";

export const login = (callback: ICallback, data: ILoginData) => {
  axiosInstance
      .post(LOGIN_PATH, data)
      .then((response) => {
          callback(response);
      })
      .catch((response) => {
          callback(response);
      });
};