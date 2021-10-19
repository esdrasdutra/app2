import { Oferta } from './../shared/oferta.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';

ItemCarrinho;

class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0;
    this.itens.map((item: ItemCarrinho) => {
      total = total + item.valor * item.quantidade;
    });
    return total;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    //Verificar se o item em questão já existe em this.itens
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinho.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {

    // incrementar quantidade
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id
    );
    if (itemCarrinhoEncontrado) {
      itemCarrinho.quantidade += 1;
    }
  }

  public removerQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinho.quantidade -= 1
      if (itemCarrinhoEncontrado?.quantidade === 0){
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
      }
    }
  }

  public limparCarrinho(): void{
    this.itens = []
  }
}

export { CarrinhoService };
