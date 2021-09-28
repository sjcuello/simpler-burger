import { Money } from './Money';

export interface Product {
    id: number;
    name: string;
    image: string;
    price: Money;
}