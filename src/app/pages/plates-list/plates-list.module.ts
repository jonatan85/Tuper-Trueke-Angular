import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietsComponent } from './diets/diets.component';
import { PlatesListRoutingModule } from './plates-list-routing.module';
import { PlatesListComponent } from './plates-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UppercaseDirective } from './directives/uppercase.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PlatesListComponent,
    UppercaseDirective,
    DietsComponent
  ],
  imports: [
    CommonModule,
    PlatesListRoutingModule,
    RouterModule,
    NgxPaginationModule,
    SharedModule,
    FormsModule
  ]
})
export class PlatesListModule { }
