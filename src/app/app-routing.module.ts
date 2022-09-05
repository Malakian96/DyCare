import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'list'},
  {
    path       : '',
    children   : [
        {path: 'list', loadChildren: () => import('./components/list/list.module').then(m => m.ListModule)},
        {path: 'detail/:id', loadChildren: () => import('./components/detail/detail.module').then(m => m.DetailModule)},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
