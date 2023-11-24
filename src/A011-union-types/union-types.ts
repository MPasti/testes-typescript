function addOrConcat(a: number | string, b: number | string) {
  //nesse caso, como fazemos uma union type, precisamos provar para o compilador que estamos certos
  //a partir de uma verificação de tipagem
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
