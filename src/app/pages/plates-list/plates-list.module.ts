import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietsComponent } from './diets/diets.component';
import { PlatesListRoutingModule } from './plates-list-routing.module';
import { PlatesListComponent } from './plates-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PlatesListComponent,
    DietsComponent
  ],
  imports: [
    CommonModule,
    PlatesListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class PlatesListModule { }
