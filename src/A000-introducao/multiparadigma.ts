type CalculatorFn = (x: number, y: number) => number;

const add: CalculatorFn = (x, y) => x + y;
const sub: CalculatorFn = (x, y) => x - y;
const mul: CalculatorFn = (x, y) => x * y;
const div: CalculatorFn = (x, y) => x / y;

const doisMaisDois = add(2, 2); //4
const doisMenosDois = sub(2, 2); //0
const doisVezesDois = mul(2, 2); //4
const doisDivididoPorDois = div(2, 2); //1

console.log(doisMaisDois);
console.log(doisMenosDois);
console.log(doisVezesDois);
console.log(doisDivididoPorDois);
