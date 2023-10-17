//If
//traduzir por "se"
//e deverá ser avaliada e retornar true ou false

if (condicao) {
    // código a ser executado
   }

//Null 
//Null é um valor que podemos atribuir a uma variável

if (!num) {
    console.log('número não fornecido');
   }

//Múltiplas condições
//operadores AND (&&) ou OR (||) para executar o código no if caso uma das condições for verdadeira, ou as duas

const num = 11;

if (num > 10 || !num) {
 console.log('número não válido');
}

//é possível usar o operador lógico && (and ou e em português) para especificar que a condição do if será validada apenas se todas as condições retornarem true

const num = 11;

if (num > 10 && num < 20) {
 console.log('número válido');
}

//if…else
//traduzir por "se...senão"

function verificaNumero(numero) {
    if (numero > 10) {
         return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}

console.log(verificaNumero(9)) //número não é maior que 10

//else if
//traduzir por "senão se"

const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}

//IMPORTANTE: Ao trabalhar com múltiplas condições e else if, lembre-se sempre que cada condição e cada bloco (if, else if e else) deve representar condições excludentes entre si! Ou seja, não pode haver ambiguidade entre as condições - uma mesma condição válida tanto no if quanto no else if, por exemplo.
