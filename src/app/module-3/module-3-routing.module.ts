import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompCComponent } from './comp-c/comp-c.component';

const routes: Routes = [
  {
    path: '',
    component: CompCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
