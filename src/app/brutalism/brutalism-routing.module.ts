import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrutalismComponent } from './brutalism.component';

const routes: Routes = [
  {
    path: '', component: BrutalismComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrutalismRoutingModule { }
