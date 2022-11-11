import { precosLivros } from "./listaLivros.js";
const livros = precosLivros;
let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(
  `O livro mais barato custa R$${livros[maisBarato].preco} e seu título é ${livros[maisBarato].titulo}`
);

let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}

console.log(
  `O livro mais barato custa R$${livros[maisCaro].preco} e seu título é ${livros[maisCaro].titulo}`
);
