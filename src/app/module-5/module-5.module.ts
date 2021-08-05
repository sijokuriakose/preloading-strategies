import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module5RoutingModule } from './module-5-routing.module';
import { CompEComponent } from './comp-e/comp-e.component';


@NgModule({
  declarations: [
    CompEComponent
  ],
  imports: [
    CommonModule,
    Module5RoutingModule
  ]
})
export class Module5Module { }
