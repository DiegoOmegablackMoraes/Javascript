import chalk from 'chalk';

function extraiLinks(arrLinks) {
  //Object.values: Extrai de um objeto apenas os valores, retornando um array
  //.join(): Converte o array para string e joga para fora do array
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus(listaURLs) {
  const arrStatus = await Promise.all(
    listaURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        return `${response.status} - ${response.statusText}`;
      } catch (error) {
        return manejaErros(error);
      }
    })
  );
  return arrStatus;
}

function manejaErros(erro) {
  if (erro.cause.code === 'ENOTFOUND') {
    return `link não encontrado`;
  } else {
    return 'Erro inesperado.';
  }
}

export default async function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);

  return listaDeLinks.map((obj, indice) => ({
    ...obj,
    status: status[indice],
  }));
}
