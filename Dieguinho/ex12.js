function calcular(a, b, operacao) {
  return operacao(a, b);
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(`Soma: ${calcular(10, 4, somar)}`);
console.log(`Subtração: ${calcular(10, 4, subtrair)}`);
console.log(`Multiplicação: ${calcular(10, 4, multiplicar)}`);
