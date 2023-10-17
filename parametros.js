//parametros de funções

            //1     //2
function soma(num1, num2) {
    return num1 + num2;
}

//console.log(soma(2, 2))

//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Tatiane", 25))

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}
console.log(multiplique (soma(4, 5)))

//Função sem retorno e sem parâmetro
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

//Função sem retorno, com parâmetro
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

//Função com retorno, sem parâmetro
function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

//Função com return e mais de um parâmetro
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90

