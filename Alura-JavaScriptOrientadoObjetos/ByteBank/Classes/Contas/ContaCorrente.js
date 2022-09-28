import { Conta } from "./Conta.js";

//Herança: através do extends, a classe ContaCorrente herda atributos e métodos da classe Conta
export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia); //aciona o contrutor da classe pai
    ContaCorrente.numeroDeContas++;
  }

  //demais metodos
  sacar(valor) {
    const taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
