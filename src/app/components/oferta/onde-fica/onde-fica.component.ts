import { OfertaService } from './../../../services/oferta.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
})
export class OndeFicaComponent implements OnInit {
  public ondeFica!: string;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parametros: Params) => {
      this.ofertaService
        .getOndeFicaOfertaPorId(parametros.id)
        .then((res: string) => {
          this.ondeFica = res;
        });
    });
  }
}
