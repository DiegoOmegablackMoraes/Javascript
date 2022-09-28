export class Cliente {
  //campos, atributos ou propriedades da classe
  nome;
  _cpf;

  get cpf() {
    return this._cpf;
  }

  //funçao que é acionada no momento em que o objeto é instanciado (constuido)
  constructor(nome, cpf) {
    //recebe como parametro os dados necessarios para construção do objeto
    //os parametros recebidos sao atribuidos aos campos da classe
    this.nome = nome;
    this._cpf = cpf;
  }
}
