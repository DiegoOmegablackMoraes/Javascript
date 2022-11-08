// Percorrer um objeto e extrair informações básicas do cliente em
// um formato mais legível e de forma automatizada para fornecer a
// outros departamentos do banco
const cliente = {
  nome: "Diego",
  idade: 35,
  cpf: "13245678900",
  email: "diego@email.com",
  fones: ["991843304", "968286396"],
  dependentes: [
    {
      nome: "Thalita",
      parentesco: "Esposa",
      dataNasc: "05/05/1997",
    },
    { nome: "Julia Alves Moraes", parentesco: "Filha", dataNasc: "15/09/2020" },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    this.saldo -= valor;
  },
};

let relatorio = "";

//método For In é próprio para percorrer propriedades de um objeto
for (let info in cliente) {
  // condiçao para ignorar os objetos internos e as funcoes do objeto
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `
    ${info}: ${cliente[info]}
     `;
  }
}
console.log(relatorio);
