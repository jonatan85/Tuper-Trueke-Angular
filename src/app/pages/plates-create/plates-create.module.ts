import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PlatesCreateRoutingModule } from './plates-create-routing.module';
import { PlatesCreateComponent } from './plates-create.component';


@NgModule({
  declarations: [
    PlatesCreateComponent
  ],
  imports: [
    CommonModule,
    PlatesCreateRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PlatesCreateModule { }
