import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrutalismRoutingModule } from './brutalism-routing.module';
import { BrutalismComponent } from './brutalism.component';


@NgModule({
  declarations: [
    BrutalismComponent
  ],
  imports: [
    CommonModule,
    BrutalismRoutingModule
  ]
})
export class BrutalismModule { }
