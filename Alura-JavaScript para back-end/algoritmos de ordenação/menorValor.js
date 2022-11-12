import { precosLivros } from "./listaLivros.js";

const livros = precosLivros;

//retorna a posicao do produto mais barato, dado um array de produtos a partir da posicao indicada
export function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }

  return maisBarato;
}

//retorna a posicao do produto mais barato e o mais caro de um array, dado um array de produtos
export function maiorMenorValor(arrProdutos) {
  let maisBarato = 0;
  let maisCaro = 0;

  for (let atual = 0; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }

    if (arrProdutos[atual].preco > arrProdutos[maisCaro].preco) {
      maisCaro = atual;
    }
  }

  return [maisBarato, maisCaro];
}
