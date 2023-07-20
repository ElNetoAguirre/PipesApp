import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";

import { BasicsPageComponent } from "./pages/basics-page/basics-page.component";
import { NumbersPageComponent } from "./pages/numbers-page/numbers-page.component";
import { OrderComponent } from "./pages/order/order.component";
import { UncommonPageComponent } from "./pages/uncommon-page/uncommon-page.component";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";

import { OrdenarPipe } from "./pipes/ordenar.pipe";
import { ToggleCasePipe } from "./pipes/toggle-case.pipe";
import { VuelaPipe } from "./pipes/vuela.pipe";


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderComponent,
    UncommonPageComponent,
    //Pipes
    OrdenarPipe,
    ToggleCasePipe,
    VuelaPipe,
    OrdenarPipe,
  ],

  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})

export class ProductsModule { }
