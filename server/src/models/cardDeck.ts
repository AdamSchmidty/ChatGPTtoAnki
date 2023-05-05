import {card} from './card'
import {Schema, model, connect} from 'mongoose';


export interface cardDeck{
    deckName: String,
    userID: String,
    dateCreated: Date,
    lastModified: Date,
    cards: card[],
    cardCount: number
}


