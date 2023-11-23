// esse trecho de colocar : é um type annotation, estamos informando ao TS que é uma váriavel de tal tipo
// sempre que utilizar o sinal de = ele vai inferir o tipo correto automaticamente
/* eslint-disable */

let names: string = 'Matheus'; //qualquer string
let idade: number = 30; //qualquer number seja 10, 1.56, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; //truthy e falsy não são booleans
let simbolo: symbol = Symbol('qualquer-symbol'); //qualquer symbol
//let big: bigint = 10n; caso seja ES2020

const nome = 'Matheus';
