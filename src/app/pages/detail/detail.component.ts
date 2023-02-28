import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plates } from 'src/app/core/services/plates/plates.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public plates?: Plates ;
  public isLogged: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
   
    this.activateRoute.data.subscribe((data) => {
      if(data[0]){
        this.plates = data[0] 
      } 
    })

  }

  public ngOnInit(): void {
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }

  public navigateToAtras() {
    if(this.plates) {
      this.router.navigate(['plate']);
    }
  }

  public navigateToLogout() {
    this.router.navigate(['account']);
  }


 
}
