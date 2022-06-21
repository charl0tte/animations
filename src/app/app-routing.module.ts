import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./universe/universe.module').then(m => m.UniverseModule)},
  {path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)},
  {path: 'brutalism', loadChildren: () => import('./brutalism/brutalism.module').then(m => m.BrutalismModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
