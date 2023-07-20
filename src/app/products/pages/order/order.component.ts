import { Component } from "@angular/core";
import { Color, Heroe } from "../../interfaces/heroe.interface";

@Component({
  selector: "products-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})

export class OrderComponent {
  public isUpperCase:boolean = false;
  public ordenarPor?:keyof Heroe;

  public heroes:Heroe[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: "Robin",
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: "Daredevil",
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: "Linterna Verde",
      vuela: true,
      color: Color.verde,
    },
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  cambiarOrden(value:keyof Heroe) {
    this.ordenarPor = value;
  }
}
