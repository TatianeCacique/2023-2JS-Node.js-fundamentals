//Arrow function
//Operador maior ou igual que 
//fica tudo em uma linha, não precisa de chaves, de return,...
//se tiver mais de uma linha, irá precisar das chaves e do return

function apresentar(nome){
    return `meu nome é ${nome}`;
}

//Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
        if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9" 
    } else {
    return num1 + num2;
    }
}

//Hoisting: arrow function 