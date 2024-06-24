import { UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface ICreateRoomData {
    name: string;
    maxPlayers: number;
    isPrivate: boolean;
    password: string;
}

export interface IRoomList {
    id: number;
    name: string;
    code: string;
    isPrivate: boolean;
    maxPlayers: number;
    usersRooms: IRoomListUsersRooms[];
}

interface IRoomListUsersRooms {
    user: IRoomListUser;
}

interface IRoomListUser {
    id: number;
    name: string;
}

export interface IJoinRoomData {
    code: string;
}

export interface ICreateRoomScreen {
    handleSubmit: UseFormHandleSubmit<ICreateRoomData, undefined>;
    handleCreateRoom: (data: ICreateRoomData) => void;
    register: UseFormRegister<ICreateRoomData>;
    watch:  UseFormWatch<ICreateRoomData>;
}