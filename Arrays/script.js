

var alunos = new Array("Igor", "José", "Marcos", "Mariana");
var alunos = ["Igor", "José", "Marcos", "Mariana", "Joana", "Leo", "João"]

console.log(alunos.length);

var aluno1 = "Igor";
var aluno2 = "José";
var aluno3 = "Marcos";
var aluno4 = "Mariana";
var aluno5 = "Joana";

// console.log(aluno1)
// console.log(aluno2)
// console.log(aluno3)
// console.log(aluno4)
// console.log(aluno5)

// console.log(alunos[0])
// console.log(alunos[1])
// console.log(alunos[2])
// console.log(alunos[3])
// console.log(alunos[4])
// console.log(alunos[5])

// for (var i = 0; i < alunos.length; i++){
//     console.log(alunos[i])
// }

// o for com 'in' vai pegar o index e com 'of' vao pegar o valor daquele elemento

for (var i in alunos){
    console.log(alunos[i])
    console.log(i)
}

for (var aluno of alunos){
    console.log(aluno)
}