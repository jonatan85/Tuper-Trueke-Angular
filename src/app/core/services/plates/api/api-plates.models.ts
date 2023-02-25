
export interface ApiPlates {
    id: string;
    name: string;
    diets: PlatesDiets;
    img: string;
    price: string;
    count: string;
    description: string;
    
}

export type PlatesDiets = 
|'China'
|'Vegana'
|'Vegetariana'
|'Proteica'
|'Alemana'
|'Japonesa'
|'Mediterranea'
|'E.E.U.U'
|'Italiana'
|'Francesa'
|'Española'
|'Vasca'
;
 
