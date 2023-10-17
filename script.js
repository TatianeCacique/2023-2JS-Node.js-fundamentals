//var
// calculo do quadrado

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

//let
//permite trocar os valore, porém tem que declara-los antes
//calculo do triangulo

let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
let area;

if(forma === 'retangulo'){
    area = altura * comprimento; 
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

//const
//valores fixos, e ser declarado antes

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

//tipagem dinamica
//untype (não precisa declarar os tipos de variáveis)

let minhaVar = 567;
minhaVar = "texto";
minhaVar = true;
