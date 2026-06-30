const readlineSync = require('readline-sync');
const celcius = readlineSync.question('Qual a temperatura? ');
console.log(`${celcius * 1.8 + 32}`); 