import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module6RoutingModule } from './module-6-routing.module';
import { CompFComponent } from './comp-f/comp-f.component';


@NgModule({
  declarations: [
    CompFComponent
  ],
  imports: [
    CommonModule,
    Module6RoutingModule
  ]
})
export class Module6Module { }
