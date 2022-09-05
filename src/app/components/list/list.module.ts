import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { ListComponent } from "./list.component";

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
  ],
  providers: [
    ApiService
  ]
})
export class ListModule
{
}
