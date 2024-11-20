const readlineSync = require('readline-sync');

//Função para obter dados do usuarios e criar o objeto
function criarObjetoUsuario() {
    //pergunta os dados necessários
    const nome = readlineSync.question('Qual o seu nome?')
    const sobrenome = readlineSync.question('Qual seu sobrenome?')
}