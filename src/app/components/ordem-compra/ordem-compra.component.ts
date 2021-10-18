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
  //Pedido
  public pedido: Pedido = new Pedido('', '', '', '');

  public endereco: string = 'Rua X';
  public numero!: string;
  public complemento: string = 'Casa B';
  public formaPagamento: string = 'debito';

  //validacoes das informacoes
  public isValidEndereco!: boolean;
  public isValidNumero!: boolean;
  public isValidComplemento!: boolean;
  public isValidFormaPagamento!: boolean;

  //estado primitivo dos campos --- (pristine)
  public pristineEndereco: boolean = true;
  public pristineNumero: boolean = true;
  public pristineComplemento: boolean = true;
  public pristineFormaPagamento: boolean = true;

  public formEstado: string = 'disabled';

  public idPedidoCompra!: number;

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.pristineEndereco = false;
    if (endereco.length > 5) {
      this.isValidEndereco = true;
    } else {
      this.isValidEndereco = false;
    }
    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.pristineComplemento = false;
    if (this.complemento.length > 0) {
      this.isValidComplemento = true;
    }
    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    this.pristineNumero = false;

    if (this.numero.length > 0) {
      this.isValidNumero = true;
    } else {
      this.isValidNumero = false;
    }
    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.pristineFormaPagamento = false;
    if (this.formaPagamento.length > 0) {
      this.isValidFormaPagamento = true;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (
      this.isValidEndereco === true &&
      this.isValidNumero === true &&
      this.isValidFormaPagamento === true
    ) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {
    this.pedido.complemento = this.complemento;
    this.pedido.endereco = this.endereco;
    this.pedido.formaPagamento = this.formaPagamento;
    this.pedido.numero = this.numero;

    this.ordemCompraService.efetivarCompra(this.pedido).subscribe(
      (idPedido: number) => {
        this.idPedidoCompra = idPedido
      }
    )
  }
}
