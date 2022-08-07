

function media(n1, n2) {

    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    // console.log(media);

    return media;
}


var resultado1 = media(6, 7);
var resultado2 = media(6, 3);

console.log(resultado1 + " e " + resultado2);
console.log(resultado1 + resultado2);

function saudacao(){
    return "Ola mundo!"
}

var s = saudacao()

console.log(s)

// var s = saudacao

// console.log(s())
// console.log(s)
// console.log(saudacao)


var resultado = media(6, 7);
console.log(resultado)

// no js voce pode atribuir uma funcao a uma var
var m = media;

var resultado2 = m(2,3)
console.log(resultado2)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var media = function (n1,n2){
    return (n1 + n2) / 2;
}

// Essas são as arrow functions as funções de seta
// var media = (n1,n2) => {
//     return (n1 + n2) / 2;
// }

console.log(" " + media(5, 6)) 

//mesma coisa//////////////////////////////////////////////////////////////////

var m = media(5, 6);
console.log(m);
