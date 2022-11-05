const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i]);
}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(media);

somaDasNotas = 0;

// Esse tal de For Of é bem interessante
for (const nota of notas) {
  somaDasNotas += nota;
}

media = somaDasNotas / notas.length;

console.log(media);
