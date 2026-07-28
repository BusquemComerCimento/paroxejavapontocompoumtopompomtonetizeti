function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

const minArrow = (a, b) => (a < b ? a : b);

console.log(`min(4, 9) = ${min(4, 9)}`);
console.log(`minArrow(4, 9) = ${minArrow(4, 9)}`);
console.log(`min(-3, -10) = ${min(-3, -10)}`);
console.log(`minArrow(-3, -10) = ${minArrow(-3, -10)}`);
