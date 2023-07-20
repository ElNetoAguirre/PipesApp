import { Component } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { RippleModule } from "primeng/ripple";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  constructor(private primengConfig:PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true
  }
  title = "pipesApp";
}
