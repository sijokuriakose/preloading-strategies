import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module4RoutingModule } from './module-4-routing.module';
import { CompDComponent } from './comp-d/comp-d.component';


@NgModule({
  declarations: [
    CompDComponent
  ],
  imports: [
    CommonModule,
    Module4RoutingModule
  ]
})
export class Module4Module { }
