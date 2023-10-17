// let x = "";
//console.log(x);
//x = 'oi';

//DECLARAÇÃO DE FUNÇÃO

//1) declara a função
                    //string
function imprimeTexto(texto) {
    console.log(texto);
}

//2) executa a função (1 ou + vezes)
imprimeTexto ("oi")
imprimeTexto ("novo teste") 

//Formas de escrever funções

function soma(){
    return 2 + 2;
}
console.log(soma())

//função dentro de função
                    //2 -> valor de soma()
function imprimeTexto(texto) {
    console.log(texto);
}

imprimeTexto (soma())

function soma(){
    //outros códigos
    //varios console.log
    //return ve por ultimo antes de fechar o bloco
    return 2 + 2;
}