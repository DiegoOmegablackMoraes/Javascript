const cliente = {
  nome: "André",
  idade: 36,
  cpf: "13245678900",
  email: "andre@email.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

//usando a notacao de colchetes é possivel varrer o objeto utilizando variáveis
console.log(cliente[chaves[0]]);

// utilizado no caso de nao sabermos as propriedade do objeto.
// atribuimos nomes as propriedades atraves de um array a parte e com foreach pegamos todas.
chaves.forEach((info) => {
  console.log(cliente[info]);
});

