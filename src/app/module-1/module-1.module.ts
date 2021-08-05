import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module-1-routing.module';
import { CompAComponent } from './comp-a/comp-a.component';


@NgModule({
  declarations: [
    CompAComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
