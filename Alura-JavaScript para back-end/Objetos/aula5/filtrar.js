const clientes = require('./clientes.json');

function filtrarAptoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty('complemento')
    );
  });
}
const filtrados = filtrarAptoSemComplemento(clientes);

console.log(filtrados);
