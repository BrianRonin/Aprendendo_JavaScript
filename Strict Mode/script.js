// mesmo não utilizando um var ou let é possivel declarar uma variavel assim
// mas ela se torna global mas existe uma string que não deixa usar uma variavel
// sem declarar uma variavel "use strict"
 x = 7

function imprimir(){
// significa que mesmo usando uma variavel em uma função ela vai ser pra todos
    
    x = 3;
    var b = 1;
    console.log (b)
    console.log (x)
}

//console.log (b) erro
//console.log (x) erro

imprimir()