//Array<T> - T[]
//...args é para receber numeros em 1, 2, 3 e colocar eles como array
export function multiplicar(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenar(...args: Array<string>): string {
  return args.reduce((acc, valor) => acc + valor);
}

export function maiusculo(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

//para não poder editar elementos deste array
const array: ReadonlyArray<string> = ['Matheus', 'Marina'];
const array2: readonly string[] = ['teste1', 'teste2'];

const resultss = multiplicar(1, 2, 3);
const concatenado = concatenar('opa', ' eita');
const allCaps = maiusculo('opa', 'eita');

console.log(resultss);
console.log(concatenado);
console.log(allCaps);
console.log(array);
console.log(array2);
