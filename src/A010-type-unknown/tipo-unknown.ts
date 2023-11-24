//ele tem quase a mesma função que o any, pode receber qualquer valor
//mas o TSC não deixa fazer o que quiser com ele
let x: unknown;
x = 100;
x = 'Teste';
x = 900;
const y = 800;

//mas se eu colocar ele numa condicional ele permite fazer o calculo
//se trata de um any porém mais seguro, precisa chegar a tipagem para isso
if (typeof x === 'number') console.log(x + y);
