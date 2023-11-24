//estrutura de dados não ordenada que utilizamos quando temos mais de uma opção para alguma coisa
//e queremos enumera-los

enum Cores {
  vermelho, //0
  azul, //1
  amarelo, //2
}
enum Cores {
  verde = 3,
  preto,
}

enum Cores2 {
  vermelho = 10,
  azul = 100,
  amarelo = 1000,
  roxo = 'cor-extra',
  verde = 201,
  //ele enumera padrao sequencia numerica
  rosa,
}

console.log(Cores);
console.log(Cores2);
//mostra um objeto com chaves apontando para os campos e enumerando eles
// se você chamar no seguinte formato
console.log(Cores.vermelho); //vai mostrar 0
