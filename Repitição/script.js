
var numero = Math.random() * 100;

console.log(numero);
// for = por
// for(var i = 0; i < numero; i++ ) {


//     console.log("Executando o for, pela " + (i + 10) + " Vez")
//     i = 6;

// }

// while = Enquanto
while (numero < 90) { 
    
    console.log("Número " + numero);
    numero = Math.random() * 100;
}

console.log(numero);
console.log("Acabou")