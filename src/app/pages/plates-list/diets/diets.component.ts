import { Plates } from '../../../core/services/plates/plates.models';
import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss']
})
export class DietsComponent implements OnInit {
  @Input() public plates?: Plates;
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();
  public isLogged: boolean = false;


  constructor(
    private router: Router,
    private auth: AuthService,
    ){}

  public ngOnInit(): void {
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
    
  }

  public removePlates() {
    this.onRemove.emit();
  }


  

  public editPlates() {
    this.router.navigate(['create-plates'], { queryParams: {
      id: this.plates?._id
    }});
  }

  public navigateToDetail() {
    if(this.plates) {
      this.router.navigate(['detail', this.plates._id]);
    }
  }

}
