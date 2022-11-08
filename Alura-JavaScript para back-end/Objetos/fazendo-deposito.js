// Adicionar uma propriedade que permita "ações",
// para que os clientes que estão cadastrados
// consigam fazer operações bancárias.

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "13245678900",
  email: "andre@email.com",
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

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
cliente.sacar(50);
console.log(cliente.saldo);
