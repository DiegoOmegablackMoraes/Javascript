// objetivo: acessar um objeto com informacoes de um cliente e
//           exibir essas informacoes no console

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "13245678900",
  email: "andre@email.com",
};

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(cliente.cpf.substring(0,3));
