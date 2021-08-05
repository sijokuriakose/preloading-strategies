import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompGComponent } from './comp-g/comp-g.component';

const routes: Routes = [
  {
    path: '',
    component: CompGComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module7RoutingModule { }
