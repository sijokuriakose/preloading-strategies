import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompBComponent } from './comp-b/comp-b.component';

const routes: Routes = [
  {
    path: '',
    component: CompBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
