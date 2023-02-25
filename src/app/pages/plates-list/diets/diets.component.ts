import { Plates } from '../../../core/services/plates/plates.models';
import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss']
})
export class DietsComponent {
  @Input() public plates?: Plates;
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();


  constructor(private router: Router){}

  public pruebas(){
    console.log(this.plates?.diets);
    
  }

  public removePlates() {
    this.onRemove.emit();
  }

  public editPlates() {
    this.router.navigate(['create-plates'], { queryParams: {
      id: this.plates?.id
    }});
  }

  public navigateToDetail() {
    if(this.plates) {
      this.router.navigate(['detail', this.plates.id]);
    }
  }
}
