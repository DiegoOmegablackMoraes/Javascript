const cliente = {
  nome: "André",
  idade: 36,
  cpf: "13245678900",
  email: "andre@email.com",
  fones: ["991843304", "993158661"],
};

//adicionando um objeto dentro de outro
cliente.dependentes = [
  {
    nome: "Thalita",
    parentesco: "Esposa",
    dataNasc: "05/05/1997",
  },
];

//acessando propriedade do dependente
cliente.dependentes[0].nome = "Thalita Alves";

//CRIANDO LISTA DE DEPENDENTES
//Primeiro mudamos a propriedade DEPENDENTES, de um objeto simples para um array de objetos (linha: 10)
//Depois criamos um novo objeto de dependentes
let dependente = {
  nome: "Julia Alves Moraes",
  parentesco: "Filha",
  dataNasc: "15/09/2020",
};

//E o inclumos no array com o metodo push
cliente.dependentes.push(dependente);

console.log(cliente);

//listando todos os dependentes
cliente.dependentes.forEach((dependente) => {
  console.log(dependente);
});

//filtrando um dependente pela dataNasc
const filha = cliente.dependentes.filter(
  (dependente) => dependente.dataNasc === "15/09/2020"
);

// o Filter sempre retorna um array
console.log(filha[0].nome);