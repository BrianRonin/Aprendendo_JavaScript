// Carne 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCrianças = document.getElementById("crianças")
let inputDuração = document.getElementById("duração")

let carne = document.getElementById("carne")
let cerveja = document.getElementById("cerveja")
let bebida = document.getElementById("bebida")


function calcular() {
    console.log("calculando...")

    let = adultos = inputAdultos.value
    let = crianças = inputCrianças.value
    let = duracao = inputDuração.value
    
    let = qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * crianças);
    let = qdtTotalCerveja = cervejaPP(duracao) * adultos 
    let = qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * crianças);
    
// O filha da puta usa isso pra `{qdtTotalCarne}` funcionar isso e não fala
// uma aspa totalmente diferente que voce nunca usa e só assim voce consegue linkar uma
// variavel

    carne.innerHTML = `<p>${qdtTotalCarne/1000} kg de Carne</p>`    
    cerveja.innerHTML = `<p>${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja</p>`    
    bebida.innerHTML = `<p>${Math.ceil(qdtTotalBebidas/2000)} garrafas de bebida</p>`
    console.log(qdtTotalCarne)

} 

function carnePP(duracao){

    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}
function cervejaPP(duracao){

    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}
function bebidasPP(duracao){

    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }






    // let carne = 400
    // if (duracao >= 6){
    //     carne = 650
    // }

}
