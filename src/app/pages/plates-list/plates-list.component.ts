import { Diets } from 'src/app/core/services/diets/diets.models';
import { PlatesService } from 'src/app/core/services/plates/plates.service';
import { diets } from 'src/app/core/services/diets/diets.data';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { PlatesDiets } from 'src/app/core/services/plates/api/api-plates.models';
import { Plates } from 'src/app/core/services/plates/plates.models';

@Component({
  selector: 'app-plates-list',
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.scss']
})

export class PlatesListComponent implements OnInit {
  public plates$?: Observable<Plates[]>
  public platesName : string = '';
  public plate : Plates[] = [];
  public platesDiets?: PlatesDiets;
  public page!: number;
  public platesEl : PlatesDiets[] = diets;
  public pagePagination: number = 0;
  public search: string = '';
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public diet: Diets[] = [];
  
  constructor(private platesService: PlatesService) {}

  public ngOnInit(): void {
    this.plates$ = this.platesService.getPlates();
  }

  
  public removePlatesFromList(_id?: string) {
    if (!_id) { return; }
    this.platesService.deletePlate(_id).pipe(
      switchMap((diet) => {
        return this.platesService.getPlates();
      })
    );  
  }

  nextPage() {
    if(this.pagePagination < 12) {
      this.pagePagination += 5;
    }
  }

  prevPage() {
    if( this.pagePagination > 0 )
    this.pagePagination -= 5;
  }

  onSearchPlates(search: string){
    this.pagePagination = 0;
    this.search = search;
  }
 
}

  
  
  



