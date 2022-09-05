import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
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
  ],
  providers: [

  ]
})
export class DetailModule
{
}
