// Exercício 5 – FizzBuzz
// Imprime números de 1 a 100, trocando múltiplos de 3 por "Fizz",
// múltiplos de 5 por "Buzz" e múltiplos de 3 e 5 por "FizzBuzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
