//operador E (AND) - Símbolo: &&
// Retorna true APENAS SE TODOS OS ENVOLVIDOS forem true
//Apenas um único false já é sulficiente para retornar false
console.log(true && true) //true
 console.log(true && false) //false
 console.log(false && false) // True
 console.log(false && true) //false
 
let idade = 19
let maiorIdade = idade >= 18 //boolean
let temCarteira = false
let temCarro = true 

console.log(maiorIdade && temCarteira && temCarro) // true

// Operador OU (OR) - Símbolo: ||
// Retorna false APENAS SE TODOS OS ENVOLVIDOS forem false 
//Apenas um único true já é suficiente para retornar true

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true)//true
console.log(false || false) //false

let temTrabalho = true
let economiza = true
let investe = true
let herdeiro = true

console.log((temTrabalho && economiza && investe) || herdeiro)
 

//Operador NÃO/NEGAÇÃO (NOT) - Símbolo: !
//Inverte o estado - True ele transforma em false e vice-versa
let ligado = true

console.log(!ligado)