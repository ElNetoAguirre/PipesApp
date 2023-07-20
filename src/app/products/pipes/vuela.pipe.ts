import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "vuela"
})

export class VuelaPipe implements PipeTransform {
  transform(value:boolean):"vuela"|"no vuela" {
    return value ? "vuela" : "no vuela";
  }
}
