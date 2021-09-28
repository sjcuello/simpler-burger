import { Money } from './Money';

export interface Product {
    id: number;
    name: string;
    price: Money;
}