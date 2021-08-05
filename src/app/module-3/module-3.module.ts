import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module-3-routing.module';
import { CompCComponent } from './comp-c/comp-c.component';


@NgModule({
  declarations: [
    CompCComponent
  ],
  imports: [
    CommonModule,
    Module3RoutingModule
  ]
})
export class Module3Module { }
