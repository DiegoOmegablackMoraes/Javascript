import { edFolha, edGalho } from './arrays.js';

function juntaListas(lista1, lista2) {
  let listaFinal = [];
  let posAtualLista1 = 0,
    posAtualLista2 = 0,
    atual = 0;

  while (posAtualLista1 < lista1.length && posAtualLista2 < lista2.length) {
    let produtoAtualLista1 = lista1[posAtualLista1];
    let produtoAtualLista2 = lista2[posAtualLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posAtualLista2++;
    }

    atual++;
  }

  while (posAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posAtualLista1];
    posAtualLista1++;
    atual++;
  }
  while (posAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posAtualLista2];
    posAtualLista2++;
    atual++;
  }
  return listaFinal;
}

console.table(juntaListas(edFolha, edGalho));
