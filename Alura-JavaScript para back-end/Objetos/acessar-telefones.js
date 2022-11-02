const cliente = {
  nome: "André",
  idade: 36,
  cpf: "13245678900",
  email: "andre@email.com",
  fones: ["991843304", "993158661"],
};

// objetivo: acessar lista de telefones do cliente
cliente.fones.forEach((fone) => console.log(fone));

//adicionar novo telefone
cliente.fones.push("968286396");
console.log(cliente);
