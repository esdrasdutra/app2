import { Oferta } from './../../../shared/oferta.model';
import { OfertaService } from './../../../services/oferta.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[OfertaService]
})
export class ComoUsarComponent implements OnInit {

  public oferta!: any
  public comoUsar!: string

  constructor(private route: ActivatedRoute, private ofertasService:OfertaService) { }

  ngOnInit(): void {
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then((res: string) => {
      this.comoUsar = res
      })
  }
}
