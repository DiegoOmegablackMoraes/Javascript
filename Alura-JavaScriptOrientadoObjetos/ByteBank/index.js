import { SistemanaAutenticacao } from "./Classes/SistemanaAutenticacao.js";
import { Cliente } from "./Classes/Users/Cliente.js";
import { Diretor } from "./Classes/Users/Diretor.js";
import { Gerente } from "./Classes/Users/Gerente.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");

const gerenteEstaLogado = SistemanaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemanaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemanaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
