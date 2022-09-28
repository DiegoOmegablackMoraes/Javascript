/*
Ser autenticavel significa ter o metodo autenticar

Interfaces criadas desta maneira sao conhecidas como duck typing, muito comuns em linguagens fracamente tipadas
 */
export class SistemanaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemanaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  //métodos estaticos podem ser acionados sem a necessidade de instanciar um objeto
  static ehAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel && //verifica se o objeto tem a propriedade autenticar
      autenticavel.autenticar instanceof Function //e se essa propriedade eh uma funcao.
    );
  }
}
