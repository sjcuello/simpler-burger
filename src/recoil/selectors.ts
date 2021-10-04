import { selector } from "recoil";
import { Order } from "../interfaces/Oder";
import { cart } from "./atoms";

export const cartTotal = selector({
    key: 'cartTotal',
    get: ({get}) => {
        const fullCart: Order[] = get(cart);
        let total = 0
        fullCart.forEach(order => total += order.total);
        return total
    },
  });