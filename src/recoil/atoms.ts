import { atom } from "recoil";
import { Item } from "../interfaces/Item";
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
    default: [] as number[]
})

export const priceExtra = atom({
    key: 'priceExtra',
    default: 0 as number
})

export const sizeList = atom({
    key: 'sizeList',
    default: {} as Item[]
})

export const flavourList = atom({
    key: 'flavourList',
    default: {} as Item[]
})

export const toppingsList = atom({
    key: 'toppingsList',
    default: [] as Item[]
})