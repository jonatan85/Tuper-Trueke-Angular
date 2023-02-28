import { PlatesDiets } from "../../plates/api/api-plates.models";

export interface ApiDiets {
    createdAt: string;
    name: PlatesDiets;
    img: string;
    description: string;
    _id: string;
}