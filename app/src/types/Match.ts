import { Socket } from "socket.io-client";

export interface IMatchData {
    playerId: number;
    status: string; // ENUM;
    cards: number[];
    match: IMatch;
}

export interface IMatchScreen {
    matchStatus: string;
    count: number;
    matchData: IMatchData | undefined;
    options: number[];
    playerToPlay: number;
    handlePlay: (card: number) => void;
    handleBet: (bet: number) => void;
    messages: IMessage[];
    sendMessageBySocket: (message: string) => void; 
    socket:  Socket | undefined;
    handleMatchMsg: (payload: ISocketData) => void;
    handleMatchChat: (payload: IChatSocket) => void;
    id?: string;
}

interface IMatch {
    id: number;
    status: string;
    roomCode: string;
    round: number;
    turn: number;
    turnsLeft: number;
    littleCorner: string;
    sky: string;
    tableCard: number;
    playOrder: number[];
    players: IPlayer[];
}

export interface IPlayer {
    id: number;
    status: PlayerStatus;
    bet: number;
    cardsOnHand: number;
    play: IPlay;
    type: string; //ENUM
    user: IUser;
    wins: number;
}

interface IPlay {
    cardId: number;
    id: number;
}

interface IUser {
    id: number;
    name: string;
}

export interface ISocketData {
    code: string;
    data: IMatchData | IPlayerRequestData | IBetData;
}

export interface IPlayerRequestData {
    counter: number;
    playerId: number;
    options: number[];
}

export interface IBetData {
    playerId: number;
    bet: number;
}

export enum PlayerStatus {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
}

export interface IChatSocket {
    data: IChatSocketData;
}

interface IChatSocketData {
    playerId: number;
    message: string;
}

export interface IMessage {
    name: string;
    message: string;
}
