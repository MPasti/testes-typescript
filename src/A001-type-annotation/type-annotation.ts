// esse trecho de colocar : é um type annotation, estamos informando ao TS que é uma váriavel de tal tipo
// sempre que utilizar o sinal de = ele vai inferir o tipo correto automaticamente
/* eslint-disable */

let names: string = 'Matheus'; //qualquer string
let age: number = 30; //qualquer number seja 10, 1.56, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; //truthy e falsy não são booleans
let simbolo: symbol = Symbol('qualquer-symbol'); //qualquer symbol
//let big: bigint = 10n; caso seja ES2020

const nome = 'Matheus';

//Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];

//também pode ser feito assim

let numbersArray: number[] = [1, 2, 3];

//para multiplos tipos
let multiplosTipos: (string | number)[] = ['a', 2, 'b', 3, 4, 'c'];

let multiplosTipos2: Array<string | number> = ['a', 2, 'b', 3, 4, 'c'];

//em uma documentação, caso tenha um T dentro de uma função, é pq recebe um tipo

//objetos

//o valor com uma ? é um valor que não é obrigatório para o objeto
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Matheus',
  idade: 19,
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const result = soma(2, 2);
//caso retorne algo, ele vai especificar oq retorna

//isso é uma função tipada em arrow function, criando um alias
const soma2: (x: number, y: number) => number = (x, y) => x + y;
