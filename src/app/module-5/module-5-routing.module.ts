import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompEComponent } from './comp-e/comp-e.component';

const routes: Routes = [
  {
    path: '',
    component: CompEComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module5RoutingModule { }
