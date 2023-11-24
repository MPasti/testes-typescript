//a tupla é um array com tipos específicos e tamanho fixo
//nesse  caso queremos o primeiro sendo um number e o sgundo uma string e só.
//normalmente no python é um tipo imutavel, mas não nessa formatação
const dadosClientes: [number, string] = [1, 'Marina'];
const dadosClientes2: [number, string, string?] = [1, 'Ruth'];
//neste caso, temos o rest operator para que o resto dos valores serem tudo string, ou seja, os dois primeiros
//são obrigatórios e o resto é opcional e string
const dadosClientes3: [number, string, ...string[]] = [1, 'Mathias'];
//aqui pode ser readonly para ser imutavel
const dadosClientes4: readonly [number, string] = [1, 'teste'];

dadosClientes[0] = 100;
dadosClientes[1] = 'Mathias';
//dadosClientes[2] = 'teste'; nesse caso não funciona, pois a tupla tem apenas 2 elementos
dadosClientes.pop();
//é possível usar funções de array

console.log(dadosClientes);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);
