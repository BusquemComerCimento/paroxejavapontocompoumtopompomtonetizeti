function reverter(arr) {
  const novo = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    novo.push(arr[i]);
  }

  return novo;
}

const arr = [1, 2, 3, 4, 5];

console.log(`Original: ${arr}`);
console.log(`Revertido: ${reverter(arr)}`);
