//assim para tipar uma função
type MapStringsCallback = (item: string) => string;

//tipando um array de strings, com um callback, vamos entrar uma função que pode ser chamada
//e vai retornar um array
//assim estamos criando um map para strings
//agora ao inves de passar CallableFunction, passamos a tipagem que criamos, pq ai a função vai seguir a tipagem
function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

//a função que criamos para dar um push nos elementos, é uma que transforma tudo em maiúsculo
//basicamente em cada elemento do loop, ele vai chamar essa função e retornar
const novasStrings = mapStrings(abc, (item) => item.toUpperCase());

console.log(novasStrings);
