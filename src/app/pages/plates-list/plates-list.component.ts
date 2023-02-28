import { PlatesService } from 'src/app/core/services/plates/plates.service';
import { diets } from '../../core/services/diets/diets.data';
import { Component, OnInit } from '@angular/core';

import { Observable, switchMap } from 'rxjs';
// 
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
  public platesIngredient?: PlatesDiets;
  // Este es para la apgiacion de angular.
  public page!: number;
  public platesEl : PlatesDiets[] = diets;
  // Para la paginacion es para calcular el numero de elementos en la pagiancion.
  public pagePagination: number = 0;
  // Para el buscador.
  public search: string = '';

  // Paginacion2.
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  

  

  constructor(private platesService: PlatesService) {}


  public ngOnInit(): void {
    this.plates$ = this.platesService.getPlates();
  }



  public removePlatesFromList(id?: string) {
    if (!id) { return; }
    this.plates$ = this.platesService.deletePlate(id).pipe(
      switchMap((product) => {
        return this.platesService.getPlates();
      })
    );
  }

  // Para la siguiente pagina.
  nextPage() {
    this.pagePagination += 5;
  }

  // Para la pagina anterior.
  prevPage() {
    // Le indicamos a el boton que se desactive si es menor a cero.
    if( this.pagePagination > 0 )
    this.pagePagination -= 5;
  }

  // Para el buscador.
  onSearchPlates(search: string){
    // Para iniciar desde la primera pagina.
    this.pagePagination = 0;
    this.search = search;
  }
 
  

 
}

  
  
  



