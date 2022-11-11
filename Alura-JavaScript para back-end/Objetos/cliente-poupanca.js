// Aproveitar o Cliente que já existe e criar a partir dele
// um novo tipo de cliente para contas poupança

import { Cliente } from "./cliente-generico.js";

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  //chama o construtor de Cliente - Herança
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const thalita = new ClientePoupanca(
  "Thalita",
  "12345678900",
  "thalita@email.com",
  500,
  800
);
console.log(thalita);

//adicionando uma propriedade nova, no caso uma função,
// atraves do prototype do objeto ClientePoupanca
ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

thalita.depositarPoup(200);

console.log(thalita);
