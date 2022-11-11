// Gerar uma função que permita a criação de novos clientes a partir de um modelo

//funcao construtora do obj Cliente
export function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = (valor) => {
    this.saldo += valor;
  };
}

//instanciando um objeto
const diego = new Cliente("Diego", "12345678900", "diego@email.com", 1000);
console.log(diego);
diego.depositar(5000);
console.log(diego);
