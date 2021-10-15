import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { Oferta } from 'src/app/shared/oferta.model';
import { OfertaService } from '../../services/oferta.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService],
})
export class OfertaComponent implements OnInit {
  private tempoObservableSubscription!: Subscription;
  private meuObservableTestSubscription!: Subscription;

  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertaService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService
      .getOfertaPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })
    })


/*
    //Observable (Observer)
    let meuObservableTest = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(3);
      observer.complete();
      observer.next(5);
    });

    //Observable (observable)
    this.meuObservableTestSubscription = meuObservableTest.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (err: string) => console.log(err),
      () => console.log('Strem de eventos finalizada')
    );

    let tempo = interval(2000);
    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });

    this.route.params.subscribe(
      (param: any) => {
        console.log(param);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        'Processamento Classificado como Conluído';
      }
    ); */
  }

  ngOnDestroy(): void {
    //this.meuObservableTestSubscription.unsubscribe()
    //this.tempoObservableSubscription.unsubscribe()
  }
}
