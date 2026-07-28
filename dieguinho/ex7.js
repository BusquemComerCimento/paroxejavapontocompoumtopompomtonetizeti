// Exercício 7 – Soma dos pares
// Soma todos os números pares de 1 a 50

let s = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    s += i;
  }
}

console.log(`A soma dos números pares de 1 a 50 é: ${s}`);
