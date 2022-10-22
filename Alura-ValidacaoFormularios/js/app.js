import { valida } from "./validacao.js";

// seleciona todos os inputs do form
const inputs = document.querySelectorAll("input");

//parametro necessario para mascara de moeda
const mascaraMoeda = {
  prefix: "R$ ",
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ",",
  thousandsSeparator: ".",
  cursor: "end",
};

//varre o array de inputs com o forEach
// e no evento blur de cada input, executa a função valida()
inputs.forEach((input) => {
  //antes de chamar o validador, se o tipo de input for monetário, aplica a mascara
  if (input.dataset.tipo === "preco") {
    SimpleMaskMoney.setMask(input, mascaraMoeda);
  }
  input.addEventListener("blur", (e) => {
    valida(e.target);
  });
});
