import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Oferta } from "../shared/oferta.model";

@Injectable()
export class OfertaService {

  constructor(private http: HttpClient){}

  public getDestaque():Promise<Oferta[]>{
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((response: any ) => response)
  }

  public getOfertasPorCategoria(categoria:string):Promise<Oferta[]>{
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((response: any ) => response)
  }

  public getOfertas():Promise<Oferta[]>{
    return this.http.get('http://localhost:3000/ofertas')
      .toPromise()
      .then((response: any ) => response)
  }
}
