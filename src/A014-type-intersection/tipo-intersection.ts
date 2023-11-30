//& AND, um E, é uma interseição de conjuntos, funciona como se os types fossem conjuntos
type temNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };
//criando o objeto usando | deixa muito relaxado, pois pode ter o valor ou não
//type Pessoa = temNome | temSobrenome | temIdade;

//nesse caso precisa ter a combinação deste 3 tipos
type Pessoa = temNome & temSobrenome & temIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
//caso utilizamos o intersection type aqui, pegaomos a interseção desses tipos
//pegando unicamente o valor A e colocando ai
//pouco utilizado esse type literal
type intersecao = AB & AC;

const persona: Pessoa = {
  nome: 'mathias',
  sobrenome: 'pasti',
  idade: 19,
};

console.log(persona);
