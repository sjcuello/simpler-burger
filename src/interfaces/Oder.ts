import { AdditionsSelected } from "./Additions";
import { Product } from "./Product";

export interface Order {
    product: Product,
    addings?: AdditionsSelected
}
