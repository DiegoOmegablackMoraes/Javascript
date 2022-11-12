import { precosLivros } from "./listaLivros.js";
import { menorValor, maiorMenorValor } from "./menorValor.js";

const livros = precosLivros;

const [menor, maior] = maiorMenorValor(livros);

console.log(
  `O livro mais barato é ${livros[menor].titulo}, que custa R$${livros[
    menor
  ].preco.toFixed(2)}
  e o livro mais caro é ${livros[maior].titulo}, que custa R$${livros[
    maior
  ].preco.toFixed(2)}.`
);

for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual);
  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];
  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log("Lista de Produtos ordenada pelo preço:", livros);

//mesma solucao com forEach()
// Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, livro,
// não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript para
// informar que o primeiro parâmetro não será utilizado no código, através do _:
livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  let livroAtual = livros[indice];
  let livroMenorPreco = livros[menor];

  livros[indice] = livroMenorPreco;
  livros[menor] = livroAtual;
});
console.log("Com forEach() deu no mesmo:", livros);
