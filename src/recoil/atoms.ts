import { atom } from "recoil";
import { Item } from "../interfaces/Item";
import { Order } from "../interfaces/Oder";

export const cart = atom({
    key: 'cart',
    default: [] as Order[]
})

export const itemOrder = atom({
    key: 'itemOrder',
    default: {} as Order
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

