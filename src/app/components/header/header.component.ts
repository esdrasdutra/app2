import { Observable } from 'rxjs';
import { OfertaService } from './../../services/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../shared/oferta.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertaService]
})
export class HeaderComponent implements OnInit {

  public $ofertas!: Observable<Oferta[]>

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaBusca: string): void {
    this.$ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca)

    this.$ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    )
  }
}
