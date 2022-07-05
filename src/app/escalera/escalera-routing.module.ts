import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscaleraComponent } from './escalera.component';

const routes: Routes = [
  {path: '', component: EscaleraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscaleraRoutingModule { }
