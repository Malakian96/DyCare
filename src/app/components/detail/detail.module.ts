import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { Route, RouterModule } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { DetailComponent } from "./detail.component";

const exampleRoutes: Route[] = [
  {
      path     : '',
      component: DetailComponent
  }
];

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports     : [
      RouterModule.forChild(exampleRoutes),
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatSnackBarModule,
      CommonModule
  ],
  providers: [
    ApiService
  ]
})
export class DetailModule
{
}
