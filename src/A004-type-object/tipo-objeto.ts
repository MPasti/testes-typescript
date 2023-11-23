const objetoA = {
  id: 1,
  nome: 'Mathias',
};

objetoA.id = 2;
//como já tem os valores inferidos, não é possível criar um novo
//objetoA.sobrenome = 'Pasti';

const objetoB: Record<string, unknown> = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

console.log(objetoB);

//readonly para não poder alterar o valor
const objetoC: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'opa',
  chaveB: 'ops',
};
//aqui diz que a chaveC não é obrigatória e podemos criar mais elementos dentro do objeto
//a partir do key:seu tipo e unknown
//especifica as que devem existir e se precisar criar mais, da para usar essa
//INDEX SIGNATURE, para fazer
//podendo utilizar o record tbm para mais abrangentes

objetoC.chaveD = 'Opa';

console.log(objetoC);

//const objetoA: object = {
//é possível tipar assim, só não é mt recomendado
