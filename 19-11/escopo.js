//let nome = "Raul"

function imprimeFrase() {
    let nome ="Raul"
    console.log(`Olá ${nome}!`)

    function imprimeEcalcula(){
        let num1 = 2
        let num2 = 5
        console.log(`Olá ${nome}, o resultado da soma é ${num1 + num2}.`)
         imprimeEcalcula()
    }
}

imprimeFrase()

