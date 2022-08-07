// é uma variavel global, depois que cria o scopo é global
{
var numero1 = 4
}
// A diferença do var e let é o scopo ele tem um scopo local, é uma variavel local
{
let numero2 = 5
console.log(numero2)
}
// const uma vez que foi atribuido um valor a ele ele não pode mais ser reatribuida como a variavel
// mas pode ser modificado com comando como .push e tem um scopo local igual o let
{
    const numero3 = [4]
    numero3.push(5)
    console.log(numero3)
}
numero3 = 5  //erro//

console.log(numero1)
console.log(numero2) //erro
console.log(numero3) //erro