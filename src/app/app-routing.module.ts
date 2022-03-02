import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

const routes: Routes = [
  {path: '', loadChildren: () => import('./universe/universe.module').then(m => m.UniverseModule)},
  {path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
