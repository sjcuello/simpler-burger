import { atom } from "recoil";
import { Product } from "../interfaces/Product";

export const cart = atom({
    key: 'cart',
    default: [] as Product[]
})