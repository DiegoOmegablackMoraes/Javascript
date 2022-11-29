import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';

const path = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {
  if (valida) {
    console.log(
      chalk.yellow('Lista validada'),
      chalk.black.bgGreen(identificador),
      await listaValidada(resultado)
    );
  } else {
    console.log(
      chalk.yellow('Lista de Links'),
      chalk.black.bgGreen(identificador),
      resultado
    );
  }
}

async function processaTexto(argumentos) {
  const path = argumentos[2];
  const valida = argumentos[3] === '--valida';

  try {
    fs.lstatSync(path);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('arquivo ou diretorio nao existe!');
      return;
    }
  }

  if (fs.lstatSync(path).isFile()) {
    const resultado = await pegaArquivo(path);
    imprimeLista(valida, resultado);
  } else if (fs.statSync(path).isDirectory()) {
    const arquivos = await fs.promises.readdir(path);

    arquivos.forEach(async (nomeArquivo) => {
      const lista = await pegaArquivo(`${path}/${nomeArquivo}`);
      imprimeLista(valida, lista, nomeArquivo);
    });
  }
}

processaTexto(path);
