import { Diets } from './../diets/diets.models';

export interface Plates {
    _id: string;
    name: string;
    diets: Diets;
    img: string;
    price: string;
    description: string;
    
}

