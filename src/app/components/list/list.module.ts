import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { ListComponent } from "./list.component";
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


const exampleRoutes: Route[] = [
  {
      path     : '',
      component: ListComponent
  }
];

@NgModule({
  declarations: [
      ListComponent,
  ],
  imports     : [
      RouterModule.forChild(exampleRoutes),
      CommonModule,
      MatChipsModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
    ],
  providers: [
    ApiService
  ]
})
export class ListModule
{
}
