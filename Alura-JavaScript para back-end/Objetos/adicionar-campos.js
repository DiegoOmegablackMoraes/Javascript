const cliente = {
  nome: "André",
  idade: 36,
  cpf: "13245678900",
  email: "andre@email.com",
};

// adicionando nova propriedade ao objeto
cliente.fone = "11 9 9184-3304";
// alterando o valor de um campo
cliente.nome = "Diego";
console.log(cliente);

//deletando um campo do objeto
delete cliente.fone;
console.log(cliente);

const thalita = {
  nome: "Thalita",
  idade: 25,
  cpf: "98765432100",
  email: "thalithalves@yahoo.com.br",
};

const clientes = {};
clientes.primeiro = cliente;
clientes.segundo = thalita;

console.log(clientes);
