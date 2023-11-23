//representa uma falta de tipo, ou qualquer tipo
//em alguns lugares o TS não consegue inferir o tipo

//ele vai dizer que nesse caso ele pode ser qualquer coisa, tipo any
//pode ser unknown no lugar do any
function showMessage(msg: any) {
  return msg;
}
// o que pode desencadear problemas, uma vez que fica que nem o JS normal
console.log(showMessage('opa'));
