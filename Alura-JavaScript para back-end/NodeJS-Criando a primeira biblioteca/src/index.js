import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
  //essa regex maluca é para pegar textos entre colchetes [] e URLs que estejam entre parenteses ()
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

  //metodo de regex aplicado em um texto, porem so retorna a primeira ocorrencia do regex
  //const capturas = regex.exec(texto);

  //metodo de string para retornar tudo encontrado no regex
  //como o matchAll retorna um objeto iteravel, vamos usar o spread operator para pegar tudo que foi devolvido
  //com isso, expandimos o conteudo pra dentro de um array
  const capturas = [...texto.matchAll(regex)];

  //1.como no retorno do map será um array de objetos, temos que englobar esse objeto em parenteses({})
  //senao o JS entende que as chaves do objeto pertencem a arrow function
  //2.como queremos utilizar um dos valores do array como key do objeto, temos que englobar essa key com chaves[]
  const resultados = capturas.map((captura) => ({
    [captura[1]]: captura[2],
  }));
  return resultados.length !== 0 ? resultados : 'Não há links no arquivo';
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'arquivo não encontrado!'));
}

//trabalhando com funçoes assincronas
//promises com async/await
async function pegaArquivo(path) {
  try {
    const enconding = 'utf8';
    const texto = await fs.promises.readFile(path, enconding);

    return extraiLinks(texto);
  } catch (error) {
    trataErro(error);
  }
}

export default pegaArquivo;
// \[[^[\]]*?\]
// \(https?:\/\/[^\s?#.].[^\s]*\)

//promises com then()
// function pegaArquivo(path) {
//   const enconding = 'utf8';
//   //1a forma de trabalhar com codigo assincrono: then()
//   // then() é um metodo para trabalhar com promessas/promises
//   // ele trata o retorno ok de uma chamada assincrona
//   // enquanto o catch trata o erro
//   fs.promises
//     .readFile(path, enconding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro);
// }

// //pegaArquivo('./arquivos/texto.md');
