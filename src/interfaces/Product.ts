
import { Additions } from './Additions';
import { Money } from './Money';

export interface Product {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    price: Money;
    additions: Additions;
}
