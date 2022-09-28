import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  //atributos estaticos sao comuns a todos os objetos instanciados por esta classe.
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  constructor(cliente, agencia) {
    this.agencia = agencia;
    this.cliente = cliente; // nao esta acessando o _cliente direto. Está chamando o SET cliente.
    ContaCorrente.numeroDeContas++; //por ser um atributo estático, deve ser acessado utilizando o proprio nome da classe como referencia.
  }

  //GETTERS AND SETTERS
  get cliente() {
    return this._cliente;
  }

  set cliente(novoValor) {
    if (!(novoValor instanceof Cliente)) return; //valida se valor recebido é um objeto de Cliente
    this._cliente = novoValor;
  }

  get saldo() {
    return this._saldo;
  }

  //METODOS DE NEGOCIO
  sacar(valor) {
    if (this._saldo >= valor) {
      //valida se o valor do saque excede o _saldo
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return; //early return é um metodo de validação em que se verifica tudo que
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
