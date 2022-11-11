class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

const diego = new Cliente("Diego", "diego@email.com", "12345678900", 1000);
console.log(diego);
diego.exibirSaldo();
diego.depositar(5000);
diego.exibirSaldo();
