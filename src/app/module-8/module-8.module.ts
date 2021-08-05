import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module8RoutingModule } from './module-8-routing.module';
import { CompHComponent } from './comp-h/comp-h.component';


@NgModule({
  declarations: [
    CompHComponent
  ],
  imports: [
    CommonModule,
    Module8RoutingModule
  ]
})
export class Module8Module { }
