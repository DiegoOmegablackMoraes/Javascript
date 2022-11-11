class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`||||||| NOTIFICAÇÃO |||||||
    Pix recebido no valor de R$${valor}.
    `);
    this.exibirSaldo();
  }

  sacar(valor) {
    this.saldo -= valor;
    console.log(`||||||| NOTIFICAÇÃO |||||||
    Realizada um retirada no valor de R$${valor}.
    `);
    this.exibirSaldo();
  }

  exibirSaldo() {
    console.log(`
    O seu saldo atual é de R$: ${this.saldo}.
    `);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    //é necessario chamar o construtor da classe pai, pois é necessario preencher as duas classes na construçao do objeto
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
    console.log(`||||||| NOTIFICAÇÃO |||||||
    Recebido um depósito de R$${valor} em sua Conta Poupança.
    Saldo da Conta Poupança: R$${this.saldoPoupanca}
    `);
  }

  investir(valor) {
    if (valor > this.saldo) {
      console.log(`O saldo da conta é insuficiente para investir R$${valor}.`);
      this.exibirSaldo();
    } else {
      this.sacar(valor);
      this.depositarPoupanca(valor);
      console.log(`Seu investimento de R$${valor} foi realizado com sucesso!`);
      this.exibirSaldo();
    }
  }
}

const diego = new ClientePoupanca(
  "Diego",
  "diego@email.com",
  "12345678900",
  1000,
  2000
);

diego.depositar(100);
diego.depositarPoupanca(150);
diego.investir(5000);
diego.investir(1000);

console.log(diego);
