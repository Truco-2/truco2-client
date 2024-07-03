export interface IMatchData {
    playerId: number;
    status: string; // ENUM;
    cards: number[];
    match: IMatch;
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
    status: string; //ENUM
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
