// Objetos - Construtores


// var calcular = function () {
//     return (this.nota1 + this.nota2) / 2;
// }

// var turma = [
//         //turma 0
//         {
//             nome: "Igor",
//             nota1: 9,
//             nota2: 7,
//             media: calcular
//         },
//         //turma 1
//         {
//             nome: "João",
//             nota1: 4,
//             nota2: 3,
//             media: calcular
//         }


// ]

// var abc = turma[1]

// console.log(abc);
// console.log(abc.media());

//Criando um retornador de objeto

// function criarAluno (nome, n1, n2) {
//     return{
//     nome: nome,
//     nota1: n1,
//     nota2: n2,
//     media: function () {
//     return (this.nota1 + this.nota2) / 2;
//     }
// }
// }

// var turma = [
// criarAluno("Igor", 9, 6),
// criarAluno("Joao", 7, 4),
// criarAluno("Bian", 10, 10)
// ]

// var abc = turma[2]

// console.log(abc)
// console.log(abc.media())

// for ( var abc of turma){
// console.log(abc.nome + " - " + abc.media())
// }

//Criando um criador de objeto

function aluno(nome, n1, n2,){

    this.nome = nome;
    this.nota1 = n1
    this.nota2 = n2

    this.media = function (){
        return (this.nota1 + this.nota2) / 2
    }
}


var a = new aluno ("Bianca", 1, 6)
var b = new aluno ("João", 1, 6)

console.log(b)
console.log(a)