import { PlatesDiets } from "../../plates/api/api-plates.models";

export interface ApiDiets {
    createdAt: string;
    name: PlatesDiets;
    img: string;
    price: string;
    description: string;
    misPlatos: string;
    _id: string;
}