import { NavigateFunction } from "react-router-dom";
import { IRoomList } from "./Room";

export interface IHomeScreen{
  navigate: NavigateFunction
  rooms: IRoomList[]
}