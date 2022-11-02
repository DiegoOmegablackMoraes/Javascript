const nomes = [
  "Joao",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinicius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

console.log(nomes);
// objetivo: remover Ana e Caio e adicionar o Rodrigo e Juca

// O metodo splice permite que seja adicionado e removido qqer item no array
// 3 params sao necessarios:
//   posicao inicial: de qual item vai começar a remoção;
//   quantidade: quantos itens serao removidos
//   Adicionados: Lista de itens a serem adicionados na posicao indicada no primeiro parametro
nomes.splice(2, 2, "Rodigo", "Juca");

// também é possível adicionar sem remover ninguem
nomes.splice(5, 0, "Diego Cardoso");
console.log(nomes);

// objetivo: Dividar a lista de  alunos em 2 salas

// o metodo slice fatia o array em pedaços.
// devemos passar como parametro o inicio e fim da fatia que queremos
const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 01: ${sala1} \n`);
console.log(`Alunos da sala 02: ${sala2} \n`);

// objetivo: unificar novamente as salas em um unica turma
const salasUnificadas = sala1.concat(sala2);
console.log(salasUnificadas);
