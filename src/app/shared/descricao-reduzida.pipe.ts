import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'desc_red'
})
export class DescricaoReduzida implements PipeTransform{

  transform(texto: string, truncarEm: number): string {
    if(texto.length > length) {
      return texto.substr(0, truncarEm) + "..."
    }
    return texto
  }
}
