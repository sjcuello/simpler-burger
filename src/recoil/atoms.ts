import { atom } from "recoil";
import { Order } from "../interfaces/Oder";

export const cart = atom({
    key: 'cart',
    default: [] as Order[]
})

export const size = atom({
    key: 'size',
    default: {} as number
})

export const flavour = atom({
    key: 'flavour',
    default: {} as number
})

export const toppings = atom({
    key: 'toppings',
    default: {} as number[]
})

export const priceExtra = atom({
    key: 'priceExtra',
    default: 0 as number
})