import { listaLivros } from './array.js';

function mergeSort(array) {
  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio));
    const parte2 = mergeSort(array.slice(meio, array.length));
    array = ordena(parte1, parte2);
  }
  return array;
}

function ordena(parte1, parte2) {
  let posAtualParte1 = 0,
    posAtualParte2 = 0;
  const resultado = [];

  while (posAtualParte1 < parte1.length && posAtualParte2 < parte2.length) {
    let produtoAtualParte1 = parte1[posAtualParte1];
    let produtoAtualParte2 = parte2[posAtualParte2];

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1);
      posAtualParte1++;
    } else {
      resultado.push(produtoAtualParte2);
      posAtualParte2++;
    }
  }
  return resultado.concat(
    posAtualParte1 < parte1.length
      ? parte1.slice(posAtualParte1)
      : parte2.slice(posAtualParte2)
  );
}
console.table(mergeSort(listaLivros));
