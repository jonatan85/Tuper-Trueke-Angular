import { Pipe, PipeTransform } from '@angular/core';
import { PlatesDiets } from 'src/app/core/services/plates/api/api-plates.models';
import { Plates } from 'src/app/core/services/plates/plates.models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Plates[] | null, name: string = '', diets?: PlatesDiets): Plates[] {
    if (!value) { return []; }
    if (!name && !diets) { return value; }
    return value.filter((plates) => {
      return plates.name.includes(name)
        && (plates.diets.name === diets || !diets);
    });
  }

}
