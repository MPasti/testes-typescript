//significa que uma função ou um método não retorna nada
//...args é um array, de acordo com o rest operator
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
function salute(): void {
  console.log('Bom dia');
}

//um método, é uma função dentro de um objeto ou uma classe
const pessoa = {
  nome: 'Matheus',
  sobrenome: 'Pasti',
  exibirNome(): void {
    console.log(this.nome, this.sobrenome);
  },
};

semRetorno();
salute();
pessoa.exibirNome();

//sempre que escrever uma função e um método, tem que declarar o tipo do retorno também, algumas vezes
//ele mesmo infere

export { pessoa };
