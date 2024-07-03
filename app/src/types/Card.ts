export enum CardSuit {
    DIAMS = 'diams',
    HEARTS = 'hearts',
    SPADES = 'spades',
    CLUBS = 'clubs',
}

export interface ICardOptions {
    rank: string;
    suit: CardSuit;
}
