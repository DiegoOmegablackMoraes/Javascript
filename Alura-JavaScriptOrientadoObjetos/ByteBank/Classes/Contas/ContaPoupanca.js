import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    //O JS exige que o construtor da classe pai seja acessada, por que
    //antes de criar uma ContaPoupanca, é preciso criar uma Conta
    super(saldoInicial, cliente, agencia);
  }

  //demais metodos
  sacar(valor) {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}
