import { REGISTER_PATH } from "helpers/apiHelper";
import { axiosInstance } from "helpers/axiosHelper";
import { ICallback } from "types/Common";
import { IRegisterData } from "types/Register";

export const register = (callback: ICallback, data: IRegisterData) => {
  axiosInstance
      .post(REGISTER_PATH, data)
      .then((response) => {
          callback(response);
      })
      .catch((response) => {
          callback(response);
      });
};