import { Diets } from './../diets/diets.models';

export interface Plates {
    id: string;
    name: string;
    diets: Diets;
    img: string;
    price: string;
    count: string;
    description: string;
    
}

