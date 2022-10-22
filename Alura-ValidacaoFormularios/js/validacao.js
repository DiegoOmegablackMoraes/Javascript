// // seleciona o input de data pelo id
// const dataNascimento = document.querySelector("#nascimento");

// // Adiciona um listener ao input para quando o campo perder o foco (blur) e chama a funcao para validar a data
// dataNascimento.addEventListener("blur", (e) => {
//   // e.target = elemento que foi alvo do evento
//   validaDataNascimento(e.target);
// });

//
/////Fazendo conforme acima, teriamos que criar uma validacao especifica para cada input, o que nao é uma boa pratica. Então vamos fazer diferente:
//

import {
  tiposDeErro,
  mensagemDeErro,
  mostraMensagemErro,
} from "./mensageria.js";

// export faz com que esta funcao fique visivel para outros arquivos js.
export function valida(input) {
  const tipoDeInput = input.dataset.tipo; //obtem o attr data do elemento html

  //verifica se dentro do objeto 'validadores' tem um elemento com o tipo de input que pegamos da form.
  // se tive, executa a funcao atrelada ao tipo de input

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  // valida se o valor do input é valido
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      mostraMensagemErro(tipoDeInput, input);
  }
}

//objeto com as funcoes chamadas por cada tipo de validacao
const validadores = {
  dataNascimento: (input) => validaDataNascimento(input),
  cpf: (input) => validaCPF(input),
  cep: (input) => recuperarCep(input),
};

function validaDataNascimento(input) {
  const dataRecebida = new Date(input.value);
  let mensagem = "";

  if (!maiorQue18(dataRecebida)) {
    mensagem = "Você deve ser maior que 18 anos para se cadastrar.";
  }

  //exibe a mensagem de validacao
  input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataMais18 <= dataAtual;
}

function validaCPF(input) {
  const cpfFormatado = input.value.replace(/\D/g, "");
  let mensagem = "";

  if (!checaCpfRpetido(cpfFormatado) || !checaEstruturaCpf(cpfFormatado)) {
    mensagem = "hoje nao";
  }
  input.setCustomValidity(mensagem);
}

function checaCpfRpetido(cpf) {
  const valoresRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  let cpfValido = true;

  valoresRepetidos.forEach((valor) => {
    if (valor == cpf) {
      cpfValido = false;
    }
  });
  return cpfValido;
}

//Verificando estrutura do CPF pelo mod11...
function checaEstruturaCpf(cpf) {
  const multiplicador = 10;
  return checaDigitoVerificador(cpf, multiplicador);
}

function checaDigitoVerificador(cpf, multiplicador) {
  if (multiplicador >= 12) {
    return true;
  }

  let multiplicadorInicial = multiplicador;
  let soma = 0;
  const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split("");
  const digitoVerificador = cpf.charAt(multiplicador - 1);
  for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
    soma = soma + cpfSemDigitos[contador] * multiplicadorInicial;
    contador++;
  }

  if (digitoVerificador == confirmaDigito(soma)) {
    return checaDigitoVerificador(cpf, multiplicador + 1);
  }

  return false;
}

function confirmaDigito(soma) {
  return 11 - (soma % 11);
}

function recuperarCep(input) {
  //garantir que o cep tenha somente números
  const cep = input.value.replace(/\D/g, "");

  //funcao FETCH é utilizada para fazer requisições a APIs
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
  };

  //valida se há algum erro no input antes de fazer a requisicao
  if (!input.validity.patternMismatch && !input.validity.valueMissing) {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          input.setCustomValidity("Não foi possível buscar o endereço");
          return;
        }
        input.setCustomValidity("");
        preencheCamposComCEP(data);
        return;
      });
  }
}

function preencheCamposComCEP(data) {
  const logradouro = document.querySelector('[data-tipo="logradouro"]');
  const cidade = document.querySelector('[data-tipo="cidade"]');
  const estado = document.querySelector('[data-tipo="estado"]');

  logradouro.value = data.logradouro;
  cidade.value = data.localidade;
  estado.value = data.uf;
}
