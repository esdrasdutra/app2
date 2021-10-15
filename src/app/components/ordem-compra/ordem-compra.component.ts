import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = 'Rua X'
  public numero!: string
  public complemento: string = 'Casa B'
  public formaPagamento: string = 'debito'

  //validacoes das informacoes
  public isValidEndereco!: boolean
  public isValidNumero!: boolean
  public isValidComplemento!: boolean
  public isValidFormaPagamento!: boolean

  //estado primitivo dos campos --- (pristine)
  public pristineEndereco: boolean = true
  public pristineNumero: boolean = true
  public pristineComplemento:boolean = true
  public pristineFormaPagamento: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void{
    this.endereco = endereco
    this.pristineEndereco = false

    if(endereco.length > 5){
      this.isValidEndereco = true
    } else {
      this.isValidEndereco = false
    }
    console.log(this.endereco);
  }

  public atualizaComplemento(complemento: string): void{
    this.complemento = complemento

    this.pristineComplemento = false

    if(this.complemento.length > 0){
      this.isValidComplemento = true
    }
  }

  public atualizaNumero(numero: string): void{
    this.numero = numero

    this.pristineNumero = false

    if(this.numero.length > 0){
      this.isValidNumero = true
    } else {
      this.isValidNumero = false
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void{
    this.formaPagamento = formaPagamento
    this.pristineFormaPagamento = false
    if(this.formaPagamento.length > 0){
      this.isValidFormaPagamento = true
    }
  }

}
