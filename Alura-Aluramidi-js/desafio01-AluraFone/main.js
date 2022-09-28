const teclado = document.querySelectorAll("input[type=button]");

let telefone = "";

teclado.forEach((tecla) => {
  tecla.onclick = () => {
    console.log(telefone.length);

    if (telefone.length > 10) {
      telefone = "";
      telefone = telefone + tecla.value;
    } else {
      telefone = telefone + tecla.value;
    }

    document.querySelector("input[type=tel]").value = telefone;
  };
});
