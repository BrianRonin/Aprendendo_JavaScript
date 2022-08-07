

function dobro(x){
    console.log(2 * x)
}                           //funcao padrao

dobro(5)

let dobro2 = function (x) {
    console.log(2 * x)
}                           //colocando uma funcao em uma variavel

dobro2(5)

let dobro3 = (x) => {
    console.log(2 * x)          //arrow function função de flecha
} 
//se tiver só um argumento não precisa dos parenteses
let dobro4 = (x) => 2 * x //e se a função for só retornar
                        //pode fazer dessa maneira
console.log(dobro4(5))

//let dobro = () => 2 * this.x; //erro arrow function não entende oque é o this
//let dobro = () => { console.log(this) } //vai imprimir o window pois vai perder o contexto
     //        dobro = dobro.bind(numero) // bind tambem não funciona com arrow function