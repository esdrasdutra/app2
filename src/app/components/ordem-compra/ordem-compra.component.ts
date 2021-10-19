import { Pedido } from './../../shared/pedido.model';
import { OrdemCompraService } from './../../services/ordem-compra.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../../services/carrinho.service';
import { ItemCarrinho } from '../../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public itensCarrinho: ItemCarrinho[] = [];

  public idPedidoCompra!: number;

  public form: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(3),
    ]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [Validators.required]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log(this.itensCarrinho);
  }

  public atualizaEndereco(endereco: string): void {}

  public atualizaComplemento(complemento: string): void {}

  public atualizaNumero(numero: string): void {}

  public atualizaFormaPagamento(formaPagamento: string): void {}

  public habilitaForm(): void {}

  public confirmarCompra(): void {
    if (this.form.status === 'INVALID') {
      this.form.markAllAsTouched();
    } else {
      if (this.carrinhoService.exibirItens().length === 0) {
        alert('Carrinho Vazio, Jão');
      } else {
        let pedido: Pedido = new Pedido(
          this.form.value['endereco'],
          this.form.value['numero'],
          this.form.value['complemento'],
          this.form.value['formaPagamento'],
          this.carrinhoService.exibirItens()
        );

        this.ordemCompraService
          .efetivarCompra(pedido)
          .subscribe((idPedido: number) => {
            this.idPedidoCompra = idPedido;
            this.carrinhoService.limparCarrinho();
          });
      }
    }
  }

  public addItem(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public remItem(item: ItemCarrinho): void {
    this.carrinhoService.removerQuantidade(item);
  }
}
