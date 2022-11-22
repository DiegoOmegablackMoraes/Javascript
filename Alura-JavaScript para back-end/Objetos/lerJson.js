const dados = require('./cliente.json');

console.log(dados);
console.log(typeof dados);

//converte o json em string para envio
const clientEmString = JSON.stringify(dados);

console.log(clientEmString);
console.log(typeof clientEmString);

//converte o json em objeto para trabalhar dentro do código
const objetoCliente = JSON.parse(clientEmString);
console.log(objetoCliente);
