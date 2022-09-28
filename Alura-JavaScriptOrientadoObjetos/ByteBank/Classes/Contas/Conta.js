//Classe Abstrata - Não pode ser instanciada. Serve somente para ser herdada
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    //Como esta classe não faz sentido para o negócio, mas é importante para o código
    //devemos previnir que um objeto Conta seja instanciado
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deveria instanciar um objeto do tipo Conta, pois essa é uma classe abstrata!"
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  //getters and setters
  set cliente(novoCliente) {
    if (!(novoCliente instanceof Cliente)) return;
    this._cliente = novoCliente;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  //Metodo abstrato - nao deve ser chamado diretamente, mas sim sobrescrito
  sacar(valor) {
    throw new Error("O método Sacar() da Conta, é abstrato!");
  }
  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
