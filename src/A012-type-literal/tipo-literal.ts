let z = 10;
z = 0b1010;
z = 'Mathias';

//não tem como editar o valor do y pois é constante, ele é um tipo literal, ele é um subtipo de number
const y = 10;

//neste caso, esta let só pode ser 100, se tentar modificar não vai poder
//ele vai dizer que esperava ser uma const e não um tipo literal
let a: 100 = 100; //eslint-disable-line
a = 120; //não vai deixar, é um subtipo, quase nunca vai utilizar
let b = 100 as const;

//neste caso não podemos declarar ele como numero e depois altera-lo

const person = {
  nome: 'teste' as const,
};

person.nome = 'teste';
// só é possível passar o nome teste para esse objeto

function escolherCores(cor: 'Vermelho' | 'Verde' | 'Azul'): string {
  return cor;
}

//só pode utilizar uma das opções colocadas no literal na tipagem da função
//o typescript mesmo sugere
console.log(escolherCores('Vermelho'));
export default 1;
