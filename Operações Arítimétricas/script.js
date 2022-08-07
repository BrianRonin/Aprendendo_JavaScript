// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Módulo
// ++ Incremento
// -- Decremento

// var a = 30;

// var b = a++;

// console.log(b);
// console.log(a);
// console.log(1 + 1);

// =    X =  Y   X = Y
// +=   X += Y   X = X + Y
// -=   X -= Y   X = X - Y
// *=   X *= Y   X = X * Y
// /=   X /= Y   X = X / Y
// %=   X %= Y   X = X % Y

// var b = 10;
// var c = 20;
// var a = 30;

// var a = b + c;


// var a = null;
// var b = a--;
// a =  a + 1;
// ++a;
// a++;
// a += 5;
// a -= 5;
// a *= 5;
// a /= 2;
// a %= 28;
// a = a % 28;

// == igual a
// === valor igual e igual
// ! = não é igual
// !== não igual ou não igual
// > maior que
// < menor que
// > = maior que ou igual a
// <= menor ou igual a

var a = 3;
var b = "3";

// === não só compara o valor mas tambem o tipo

console.log ( a === b )
console.log ( a == b )

// agora o computador vai mostrar true apenas se for diferente
console.log ( a != b )
console.log ( a !== b )

var a = 3
var b = 5

// > serve pra mostrar se algo é maior que algo assim como < se é menor doque algo

console.log (a > b)
console.log (a < b)

var b = 3
// >= serve pra mostrar se algo é maior ou igual que algo assim como <= menor ou igual a algo

console.log ( a >= b )
console.log ( a <= b )

// && e
// ou
// negativo

var a = true;
var b = false;

// & compara dois valores bolivianos e só retorna o valor true se os dois valores for true
var c = a && b;

console.log(c);

var idade = 25;

var maior20 = idade >= 20;
var menor30 = idade <= 30;

var entre = maior20 && menor30;

var maior10 = idade <= 10;
var menor65 = idade >= 65;

var Gratuidade = maior10 || menor65;

console.log("idade ", idade)

console.log("maior que vinte", maior20);

console.log("Manor que trinta", menor30);

console.log("entre 20 e 30", entre)
console.log("Tem direito a gratuidade?", Gratuidade)






