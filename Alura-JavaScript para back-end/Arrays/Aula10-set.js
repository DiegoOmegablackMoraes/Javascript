const nomes = [
  "Ana",
  "Clara",
  "Maria",
  "Maria",
  "João",
  "João",
  "João",
  "Maria",
];

//Tira duplicados e devolver um objeto, nao um array
const meuSet = new Set(nomes);

//entao podemos utilizar o spread para converter em array
const nomesAtualizados = [...meuSet];

//modo simplificado
const nomesAtualizados2 = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(nomesAtualizados2);
