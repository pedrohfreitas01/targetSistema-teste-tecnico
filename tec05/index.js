function inverterCaracteres(str) {
  let resultado = "";
  // Passa por cada caractere de trás para frente
  for (let k = str.length - 1; k >= 0; k--) {
    resultado += str[k]; // Adiciona o caractere ao resultado
  }
  return resultado; // Retorna a string invertida
}

const minhaString = "Pedro";
const stringInvertida = inverterCaracteres(minhaString);

const palidromo = "Radar";
const palidromoInvertida = inverterCaracteres(palidromo);

console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);

console.log("String original:", palidromo);
console.log("Bonus: ", palidromoInvertida);
