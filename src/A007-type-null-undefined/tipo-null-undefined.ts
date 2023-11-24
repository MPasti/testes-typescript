let x; //neste caso o x será any
if (typeof x === 'undefined') x = 20; //como ocorre esse estreitamento, que faz o any virar number
console.log(x * 2); //eu posso utilizar ele como um number

export function createPerson(
  //abertura da função declarando as variáveis que vão receber
  firstName: string,
  lastName?: string,
): {
  //type annotation, declarando o objeto que a função vai retornar
  firstName: string;
  lastName?: string;
} {
  //corpo da função
  return {
    firstName,
    lastName,
  };
}
//quando for utilizar esse objeto, vamos checar se o lastName existe nele, pois
//como ele possui a ? ele pode ser string ou undefined
//assim da para fazer uma condicional

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);
const squareOfString = squareOf('2');

if (squareOfTwo === null) {
  console.log('valor inválido');
} else {
  console.log(squareOfTwo);
}

squareOfString === null
  ? console.log('valor inválido')
  : console.log(squareOfString);
