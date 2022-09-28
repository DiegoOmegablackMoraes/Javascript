export class Cliente {
  constructor(nome, cpf, senha) {
    this.nome = nome;
    this._cpf = cpf; // atributo privado
    this._senha = senha;
  }

  autenticar() {
    return true;
  }

  //getters and setters
  get cpf() {
    return this._cpf;
  }
}
