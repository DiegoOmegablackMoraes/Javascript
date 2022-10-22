const now = new Date();
const tempo = now.getHours();

const fundo = document.querySelector("body");

tempo < 18
  ? (fundo.style.background = "#fed02e")
  : (fundo.style.background = "#1000ff");
