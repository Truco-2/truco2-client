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
    owner: IRoomListOwner;
    UsersRooms: IRoomListUsersRooms[];
}

interface IRoomListOwner {
    id: number;
    name: string;
}

interface IRoomListUsersRooms {
    user: IRoomListOwner;
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