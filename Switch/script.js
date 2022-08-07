var nota1 = 10;
var nota2 = 10;


var media = (nota1 + nota2) / 2;

var conceito= ""

if (media >= 7){
    console.log("Você passou com média " + media)
}
else{
    console.log("Sua nota " + media + " Não foi o suficiente para passar")
}

if(media >=8){
    conceito = "Ótimo";
}
else if(media >= 6.5){
    conceito = "Bom";
}
else if(media <= 6.5){
    conceito = "Regular";
}

// conceito = "Mais ou menos"

console.log (conceito);

switch(conceito){

    case "Ótimo":
        console.log("Parabéns você é um otímo aluno")
        break;
    case "Bom":
        console.log("Você esta quase perfeito")
        break;
    case "Regular":
        console.log("Estude mais um pouco")
        break;
    default:

    console.log("Houve algum erro")
    break
}