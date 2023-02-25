import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plates } from 'src/app/core/services/plates/plates.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  public plates?: Plates ;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
   
    this.activateRoute.data.subscribe((data) => {
      if(data[0]){
        this.plates = data[0] 
      } 
    })

  }

  public navigateToAtras() {
    if(this.plates) {
      this.router.navigate(['plate']);
    }
  }


 
}
