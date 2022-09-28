function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  elemento.localName === "audio" && elemento
    ? elemento.play()
    : console.error("Elemento não encontrado");
}

// // se atribuir a função ao onclick utilizando os (), o js vai executar a função diretamente.
// // O correto é armazenar a função sem utilizar os parentesis
// document.querySelector(".tecla_pom").onclick = tocaSom;

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1]; //O atributo classList obtem as classes de um elemento html
  const idAudio = `#som_${instrumento}`;

  // Se tentar passar o atributo para a funcao tocaSom da maneira tradicional, ou seja,
  // colocando entre parentesis, o js vai executa-la imediatamente.
  // Como nao queremos isso, é preciso encapsular a funcao tocaSom em uma funcao anonima:
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  //outra maneira de declarar funcao anonima com arrow function
  tecla.onkeydown = (evento) => {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove("ativa");
  };
}
