import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscaleraRoutingModule } from './escalera-routing.module';
import { EscaleraComponent } from './escalera.component';


@NgModule({
  declarations: [
    EscaleraComponent
  ],
  imports: [
    CommonModule,
    EscaleraRoutingModule
  ]
})
export class EscaleraModule { }
