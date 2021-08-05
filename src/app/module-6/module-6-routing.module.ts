import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompFComponent } from './comp-f/comp-f.component';

const routes: Routes = [
  {
    path: '',
    component: CompFComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module6RoutingModule { }
