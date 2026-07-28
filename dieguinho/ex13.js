// Exercício 13 – Range e soma

function range(a, b) {
  const arr = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}

function soma(arr) {
  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }

  return s;
}

console.log(range(1, 10));
console.log(`soma(range(1, 10)) = ${soma(range(1, 10))}`);
