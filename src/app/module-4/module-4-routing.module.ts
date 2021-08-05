import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompDComponent } from './comp-d/comp-d.component';

const routes: Routes = [
  {
    path: '',
    component: CompDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module4RoutingModule { }
