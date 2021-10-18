import { Pedido } from './../../shared/pedido.model';
import { OrdemCompraService } from './../../services/ordem-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {


  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {

  }

  public atualizaComplemento(complemento: string): void {

  }

  public atualizaNumero(numero: string): void {


  }

  public atualizaFormaPagamento(formaPagamento: string): void {

  }

  public habilitaForm(): void {

  }

  public confirmarCompra(): void {

  }
}
