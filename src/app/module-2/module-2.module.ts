import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module-2-routing.module';
import { CompBComponent } from './comp-b/comp-b.component';


@NgModule({
  declarations: [
    CompBComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
