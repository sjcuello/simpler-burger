import {Item} from './Item'

export interface Additions {
    sizes: boolean,
    toppings: boolean,
    flavours: boolean
}

export interface AdditionsSelected {
    size?: number,
    flavour?: number,
    toppings?: number[]
}