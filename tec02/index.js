function Fibonacci(num) {
  let a = 0;
  let b = 1;

  while (b < num) {
    let valorAntigo = a; // pega o A antes de att
    a = b;
    b = valorAntigo + b; // b fica att
  }

  // Verifica se B é = ao num  ou se o número é 0
  return b === num || num === 0;
}

const numberToCheck = 11; // onde coloca o numero para checkar 

if (Fibonacci(numberToCheck)) {
  console.log(`${numberToCheck} pertence   a  sequência `);
} else {
  console.log(`${numberToCheck} não pertence  a sequência`);
}
