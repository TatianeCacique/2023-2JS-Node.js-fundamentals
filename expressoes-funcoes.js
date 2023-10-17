//declaração de função

function minhaFuncao(param){
    //bloco de código
}

//minhaFuncao("param")

//espressões de funções

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1))

    //Diferença principal
//Diferença principal : HOISTING
//funções e var são listadas no topo do arquivo

//pode utilizar o console.log antes de declarar a função
console.log(apesentar())

function apesentar(){
    return "olá";
}


console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}
