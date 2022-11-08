// Percorrer um objeto, verificar se existe a chave 'dependentes' e,
// caso exista, enviar uma mensagem de oferta de seguro.
const cliente = {
  nome: "Diego",
  idade: 35,
  cpf: "13245678900",
  email: "diego@email.com",
  fones: ["991843304", "968286396"],
  dependentes: [
    {
      nome: "Thalita",
      parentesco: "Esposa",
      dataNasc: "05/05/1997",
    },
    { nome: "Julia Alves Moraes", parentesco: "Filha", dataNasc: "15/09/2020" },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    this.saldo -= valor;
  },
};

function oferecerSeguro(obj) {
  //cria um array com as propriedades do objeto
  const propsClientes = Object.keys(obj);

  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}

oferecerSeguro(cliente);

//cria um array com o valor das propriedades do objeto
console.log(Object.values(cliente));

//converte o objeto em array, onde a posição [0] é a chave e a [1] é o valor
console.log(Object.entries(cliente));
