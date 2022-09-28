import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//instanciando um novo objeto
//como as classes agora tem o método construtor,
//é necessario passar os dados do objeto como parametro
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(contaCorrenteRicardo, conta2, ContaCorrente.numeroDeContas);
