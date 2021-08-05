import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module7RoutingModule } from './module-7-routing.module';
import { CompGComponent } from './comp-g/comp-g.component';


@NgModule({
  declarations: [
    CompGComponent
  ],
  imports: [
    CommonModule,
    Module7RoutingModule
  ]
})
export class Module7Module { }
