//tipagem estruturada
//para o TS, a identidade do tipo não importa muito, mas as restrições destes tipos!

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

//não precisamos passar a tipagem dos usuarios
//ele reclamaria se a senha fosse number
const usuario = { username: 'Mathias', password: '123456' };
//poderiamos ter mais chaves dentro desses objetos, ele só precisa do tipo User, mas não precisa necessariamente
//o tipo User, ele precisa apenas atender suas especificações, ter duas strings, ele só está preocupado com o conteúdo
const sentUsuario = { username: 'Mathias', password: '123456', teste: '' };
const loggedIn = verifyUser(usuario, sentUsuario);

console.log(loggedIn);
