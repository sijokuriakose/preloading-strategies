import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompHComponent } from './comp-h/comp-h.component';

const routes: Routes = [
  {
    path: '',
    component: CompHComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module8RoutingModule { }
