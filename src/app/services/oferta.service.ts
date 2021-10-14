import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Oferta } from "../shared/oferta.model";
import { URL_API } from "../app.api";
import { map } from 'rxjs/operators';

@Injectable()
export class OfertaService {

  constructor(private http: HttpClient){}

  public getDestaque():Promise<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((response: any ) => response)
  }

  public getOfertasPorCategoria(categoria:string):Promise<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((response: any ) => response)
  }

  public getOfertas():Promise<Oferta[]>{
    return this.http.get(`${URL_API}`)
      .toPromise()
      .then((response: any ) => response)
  }

  public getOfertaPorId(id:number):Promise<Oferta>{
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((response: any) => {
        return response[0]
      })
  }

  public getComoUsarOfertaPorId(id:number):Promise<string>{
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((response: any) => {
        return response[0].descricao
      })
  }


  public getOndeFicaOfertaPorId(id:number):Promise<string>{
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((response: any) => {
        return response[0].descricao
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
    .pipe(
      map((response) => response)
    )}
}
