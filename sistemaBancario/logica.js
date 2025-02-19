// Variavel que armazena o saldo inicial da conta 
let saldo = 0

// Função para atualizar o saldo na tela
function atualizarSaldo() {
    // Selecionar o elemento do saldo e atualizar o texto com o valor depositado
    document.getElementById('saldo').textContent = saldo.toFixed(2) 
}
// Função que realiza o depósito
function depositar() {
    // Obtém o valor digitado pelo usuário e converte para número decimal
    valor = parseFloat(document.getElementById('valor').value)
    // Verifica se o valor é válido(maior que 0 e numérico)
    if (isNaN(valor) || valor <= 0){
        // Exibe alerta se o valor for válido 
        alert("O sô, faz favor de insirir um trem(número) válido!!! ")
        return // Interrompe a execução da função
    }
    // Adicionar um valor
    saldo += valor
    // Atualizar o saldo na tela
    atualizarSaldo()

    // Exibir uma mensagem confirmando o depósito
    alert("Nuhh zé, ta ricão ein, hora do café com pão de queijo... " + valor.toFixed(2) + " Adicionados com sucesso!")


}

// Função que realiza o saque
function sacar() {
    //Obtém o valor digitado pelo usuário e converte para decimal
    valor = parseFloat(document.getElementById('valor').value)
    // Verificar se o valor é válido
    if (isNaN(valor) || valor <= 0 ) {
        alert("Por vafor, insira um valor válido!!!!!!")

    }
    // verificar se o saldo é sulficiente
    if (valor > saldo) {
        alert("Ei pobre :] ... você não tem esse dinheiro, Tá querendo nos roubar?")
        return
    }
    // Subtrai o valor do saldo
    saldo -= valor

    //Atualizar o saldo
    atualizarSaldo()
    alert("Tá um pouco menos rico agora T-T... Saque de R$ "+ valor.toFixed(2) + " realizado com sucesso")
}
