import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1/route1.component';
import { Route2Component } from './route2/route2/route2.component';

const routes: Routes = [{
  path: 'route1',
  // component: Route1Component,
  loadChildren: () => import('src/app/route1/route1.module').then(m => m.Route1Module),
}, {
  path: 'route2',
  // component: Route2Component,
  loadChildren: () => import('src/app/route2/route2.module').then(m => m.Route2Module),
}, {
  path: '',
  redirectTo: 'route1',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
