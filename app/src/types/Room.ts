export interface ICreateRoomData {
    name: string;
    maxPlayers: number;
    isPrivate: boolean;
    password: string;
}

export interface IRoomList {
    id: number;
    name: string;
    status: number; // criar enum para status
    code: string;
    ownerId: number;
    isPrivate: boolean;
    maxPlayers: number;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    owner: IRoomListOwner;
    UsersRooms: IRoomListUsersRooms[];
}

interface IRoomListOwner {
    id: number;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

interface IRoomListUsersRooms {
    userId: number;
    roomId: number;
    assignedAt: Date;
    user: IRoomListOwner;
}
