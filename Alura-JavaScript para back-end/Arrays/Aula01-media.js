// cria array com 3 notas
const notas = [10, 7, 8, 5, 10];

// remove a nota na ultima posicao do array
notas.pop();
// adiciona nova nota ao final do array
notas.push(7);
// exibe o array de notas
console.log(notas);

let somaNotas = 0;

// varre o array de notas e as soma
notas.forEach((nota) => {
  somaNotas += nota;
});

// calcula a média de todas as notas do array
const media = somaNotas / notas.length;
console.log(`A média é ${media}.`);
