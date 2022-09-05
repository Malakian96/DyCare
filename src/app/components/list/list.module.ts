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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'

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
      FormsModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ],
  providers: [
    ApiService
  ]
})
export class ListModule
{
}
