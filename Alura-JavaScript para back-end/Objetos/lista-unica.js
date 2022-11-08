// Extrair de uma listagem de clientes apenas as informações de
// dependentes e montar uma lista única, para análise de outros
// departamentos do banco
const clientes = [
  {
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
      {
        nome: "Julia Alves Moraes",
        parentesco: "Filha",
        dataNasc: "15/09/2020",
      },
    ],
    saldo: 100,
    depositar: function (valor) {
      this.saldo += valor;
    },
    sacar: function (valor) {
      this.saldo -= valor;
    },
  },
  {
    nome: "Thalita",
    idade: 35,
    cpf: "13245678900",
    email: "thalita@email.com",
    fones: ["991843304", "968286396"],
    dependentes: [
      {
        nome: "Diego",
        parentesco: "Marido",
        dataNasc: "06/04/1987",
      },
      {
        nome: "Julia Alves Moraes",
        parentesco: "Filha",
        dataNasc: "15/09/2020",
      },
    ],
  },
];

let listaDependentes = [];
clientes.forEach((cliente) => {
  listaDependentes = [...listaDependentes, ...cliente.dependentes];
});

//exibe itens do array em forma de tabela
console.table(listaDependentes);
