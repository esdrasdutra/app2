import { Observable, of, Subject } from 'rxjs';
import { OfertaService } from './../../services/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../shared/oferta.model';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertaService]
})
export class HeaderComponent implements OnInit {

  public $ofertas!: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()
  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    //retorno
    this.$ofertas = this.subjectPesquisa
    .pipe(debounceTime(1000)) //executa a ação do switchmap apos 1s
    .pipe(distinctUntilChanged()) // para fazer pesquisas distintas
    .pipe(
      switchMap((termo: string) => {
        if(termo.trim() === ''){
          return of<Oferta[]>([])
        }
        return this.ofertaService.pesquisaOfertas(termo)
      })
    )
    .pipe(catchError((err: any) => {
      return of<Oferta[]>([])
    }))
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca.trim())
  }

  public limpaPesq():void{
    this.subjectPesquisa.next('')
  }
}
