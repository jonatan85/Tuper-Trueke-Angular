import { Plates } from 'src/app/core/services/plates/plates.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform {

  transform(plates: Plates[], page: number = 0, search: string = '' ): Plates[] {
   
    if(search.length === 0)
    return plates.slice(page, page + 4);

    const filterPlates = plates.filter( plate => plate.name.includes(search));
    
    return filterPlates.slice(page, page +5);
  }
}



