import { PlatesDiets } from "../../plates/api/api-plates.models";

export interface ApiDiets {
    name: PlatesDiets;
    img: string;
    description: string;
    id: string;
}