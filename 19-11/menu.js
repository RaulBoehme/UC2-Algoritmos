const readlineSync = require('readline-sync');

function imprimeFrase(){
    console.log("Olá, tudo bem com você?")
}

function cauculoSoma(){
    console.log(`A soma de 5+5 é ${5+5}.`)
}

function exibirMenu() {
 let opcao; 
 
 //Enquanto a opção não for 3 (Sair), o loop continuará
 while (true) {
    // Exibir o menu e capturar a entrada do usuário 
    opcao = readlineSync.questionInt("Escolha uma opcao: \n1. Imprimir frase\n2. Caucular Soma\n3. Sair\n");

    switch(opcao) {
        case 1: 
        imprimeFrase()
        break;
        case 2: 
        cauculoSoma()
        break;
        case 3:
            console.log("Saindo...");
            return; //Encerraa função, saindo do loop
        default:
            console.log("Opção inválida!!");
            break;
    }
 }

}

//Chamar a função para exibir o menu
exibirMenu();