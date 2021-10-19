import { Component, OnInit } from '@angular/core';
import { OfertaService } from "../../services/oferta.service";
import { Oferta } from "src/app/shared/oferta.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta []

  constructor(private ofertasService: OfertaService) { }

  ngOnInit(): void {
    this.ofertasService.getDestaque()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas})
  }
}
