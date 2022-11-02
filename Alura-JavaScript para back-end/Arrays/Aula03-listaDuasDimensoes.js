// objetivo: Criar lista de alunos, outra lista de médias e gerar uma terceira lista
//           relacionando os alunos as medias.

const alunos = ["Joao", "Juliana", "Caio", "Ana"];
const medias = [10, 07, 09, 06];

// criada a lista de 2 dimensoes
let listaDeNotaseAlunos = [alunos, medias];

// console.log(
//   `${listaDeNotaseAlunos[0][0]}, sua média é ${listaDeNotaseAlunos[1][0]}`
// );

const exibeNomeNota = (nomeDoAluno) => {
  //verifica se na lista contem o nome do aluno informado
  if (listaDeNotaseAlunos[0].includes(nomeDoAluno)) {
    //obtem o indice do aluno no array
    let indice = listaDeNotaseAlunos[0].indexOf(nomeDoAluno);
    return `${listaDeNotaseAlunos[0][indice]}, sua média é ${listaDeNotaseAlunos[1][indice]}.`;
  } else {
    return "Aluno não cadastrado.";
  }
};

console.log(exibeNomeNota("Diego"));
