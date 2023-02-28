import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
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
  public page!: number;
  public platesEl : PlatesDiets[] = diets;
  public pagePagination: number = 0;
  public search: string = '';
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public isLogged: boolean = false;
  

  

  constructor(
    private platesService: PlatesService,
    private router: Router,
    private auth: AuthService,
    ) {}


  public ngOnInit(): void {
    this.plates$ = this.platesService.getPlates();
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }

  public removePlatesFromList(id?: string) {
    if (!id) { return; }
    this.plates$ = this.platesService.deletePlate(id).pipe(
      switchMap((product) => {
        return this.platesService.getPlates();
      })
    );
  }

  nextPage() {
    this.pagePagination += 5;
  }

  prevPage() {
    if( this.pagePagination > 0 )
    this.pagePagination -= 5;
  }

  onSearchPlates(search: string){
    this.pagePagination = 0;
    this.search = search;
  }
 
  public navigateToLogout() {
    this.router.navigate(['account']);
  }
}

  
  
  



