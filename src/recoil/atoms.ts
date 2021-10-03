import { atom } from "recoil";
import { Item } from "../interfaces/Item";
import { Order } from "../interfaces/Oder";

export const cart = atom({
    key: 'cart',
    default: [] as Order[]
})

export const isModalOpen = atom({
    key: "isModalOpen",
    default: false
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

/**
 * {
            "product": {
                "id": 2,
                "title": "Combo Double Burger",
                "subtitle": "Double jucy delicious burger. Choose your toppings.",
                "image": "assets/images/double-burger.svg",
                "price": {
                    "currency": "USD",
                    "amount": 10.99
                },
                "additions": {
                    "sizes": true,
                    "flavours": true,
                    "toppings": true
                }
            },
            "addings": {
                "size": {},
                "flavour": {}
            }
        },
        {
            "product": {
                "id": 9,
                "title": "Fries",
                "subtitle": "Crunchy unique fries.",
                "image": "assets/images/fries.svg",
                "price": {
                    "currency": "USD",
                    "amount": 3.49
                },
                "additions": {
                    "sizes": true,
                    "flavours": false,
                    "toppings": false
                }
            },
            "addings": {
                "size": {},
                "flavour": {}
            }
        },
        {
            "product": {
                "id": 1,
                "title": "Combo Burger",
                "subtitle": "Simple but jucy burger. Choose your toppings.",
                "image": "assets/images/burger.svg",
                "price": {
                    "currency": "USD",
                    "amount": 9.99
                },
                "additions": {
                    "sizes": true,
                    "flavours": true,
                    "toppings": true
                }
            },
            "addings": {
                "size": {},
                "flavour": {}
            }
        },
        {
            "product": {
                "id": 10,
                "title": "Soda",
                "subtitle": "Accompany your burger with a soda.",
                "image": "assets/images/soda.svg",
                "price": {
                    "currency": "USD",
                    "amount": 1.00
                },
                "additions": {
                    "sizes": true,
                    "flavours": true,
                    "toppings": false
                }
            },
            "addings": {
                "size": {},
                "flavour": {}
            }
        },
        {
            "product": {
                "id": 5,
                "title": "Burger",
                "subtitle": "Simple but jucy burger. Choose your toppings.",
                "image": "assets/images/burger.svg",
                "price": {
                    "currency": "USD",
                    "amount": 6.25
                },
                "additions": {
                    "sizes": false,
                    "flavours": false,
                    "toppings": true
                }
            },
            "addings": {
                "size": {},
                "flavour": {}
            }
        }
 */