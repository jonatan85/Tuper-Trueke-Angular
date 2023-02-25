import { ExitGuard } from './../../core/guards/exit.guard';
import { PlatesCreateComponent } from './plates-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component: PlatesCreateComponent,
    canDeactivate: [ExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatesCreateRoutingModule { }
