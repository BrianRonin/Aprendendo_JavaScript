var idade = 19;

// if (idade >= 35 && idade <= 70) {
//     console.log("pode")
//     console.log("Qual o seu pedido?")

// a mesma coisa porem invertida com || de forma invertida
if (idade <= 18 || idade >= 70) {
    console.log("não pode")
    console.log("Volte futuramente")

}
else if (idade >= 18 && idade <= 70) {
    console.log("pode");
    console.log("Mostre a identidade");
}
else {
    console.log("não pode")
    console.log("Volte futuramente")
}
