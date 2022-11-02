const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => (nota == 10 ? nota : ++nota));

console.log(notasAtualizadas);

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesAtualizados);
