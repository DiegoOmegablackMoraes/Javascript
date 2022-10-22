//array com os tipos de erro que estamos tratando para bater com a mensagem que vamos exibir
export const tiposDeErro = [
  "typeMismatch",
  "patternMismatch",
  "customError",
  "valueMissing",
];

// mensageria: para cada input, trata as mensagens de acordo com o erro de preenchimento
export const mensagemDeErro = {
  nome: {
    valueMissing: "O campo Nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo Email não pode estar vazio.",
    typeMismatch: "O email digitado não é válido.",
  },
  senha: {
    valueMissing: "O campo Senha não pode estar vazio.",
    patternMismatch:
      "A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos",
  },
  dataNascimento: {
    valueMissing: "O campo Data de Nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar.",
  },
  cpf: {
    valueMissing: "O campo CPF não pode estar vazio.",
    customError: "O CPF digitado não é válido.",
  },
  cep: {
    valueMissing: "O campo de CEP não pode estar vazio.",
    patternMismatch: "O CEP digitado não é válido.",
    customError: "Não foi possível buscar o endereço.",
  },
  logradouro: {
    valueMissing: "O campo Logradouro não pode estar vazio",
  },
  cidade: {
    valueMissing: "O campo Cidade não pode estar vazio",
  },
  estado: {
    valueMissing: "O campo Estado não pode estar vazio",
  },
  preco: {
    valueMissing: "O campo Preço não pode estar vazio",
  },
};

export function mostraMensagemErro(tipoDeInput, input) {
  let mensagem = "";
  //varre o array de erro para verificar se o input deu algum erro de validacao
  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagemDeErro[tipoDeInput][erro];
    }
  });

  return mensagem;
}
