import { Diets } from '../diets/diets.models';
import { ApiPlates } from './api/api-plates.models';
import { Plates} from './plates.models'; 

export function transformPlates(apiPlates: ApiPlates, selectedDiets?: Diets): Plates{
     return {
        ...apiPlates,
        diets: selectedDiets
            ? selectedDiets
            : {name: apiPlates.diets}
     }
}