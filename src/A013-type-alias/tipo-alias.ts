// isso é um protocolo para o tipo, um contrato
// todo objeto do tipo idade, ou do tipo pessoa, devem seguir este padrão de tipagem
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: corPreferida;
};

type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = corRGB | corCMYK;

export const pessoa: Pessoa = {
  nome: 'Matheus',
  idade: 19,
  salario: 800_000, //800000
  corPreferida: 'Amarelo',
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
  //retornamos args para não modificar o objeto original, apenas adicionar em certo campo
}
//só é possível passar os elementos da tipagem
console.log(setCorPreferida(pessoa, 'Preto'));
