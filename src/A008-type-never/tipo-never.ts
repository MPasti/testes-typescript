// quer dizer que nunca vai retornar nada, ou seja, um erro, ou um loop infinito
// não é void, para ser void é pq não retorna nada
// nesse caso, nunca retorna nada, sempre roda erro
export function criaErro(): never {
  throw new Error('Erro');
}

criaErro();
