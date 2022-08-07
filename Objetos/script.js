
//Isso é um array que agente ja viu também muito parecido com o objeto

var alunos = ["Igor", "Jose"]

console.log(alunos[0])

// pra fazer a diferença é que inves de abrir e fechhar nos colchetes
// vai abri e fechar na chave
// a maior diferenca entre um array e um objeto é que no objeto
// voce pode criar uma chave pra acessar um elemento ou index
// Sempre vai ter uma chave e um valor e virgula se ter mais
// Um objeto pode ter até mesmo um objeto na propriedade do objeto

// [] <-- aray "alunos" <-- string {escola: [alunos]} <-- objetos
// var Objeto = {Propriedade/chave: "Propriedade", metodo: function (argumentos) {funcao/metodo}}

var aluno = { nome:"Igor",
              nota1: 7.5,
              notas: [7.5, 5.0]
        }


//formas de puxar no .log

console.log(aluno.nota1)

console.log(aluno["nome"])

console.log(aluno.notas[0])

console.log(aluno["notas"][1])

//Você tambem pode inserir mais propriedades mesmo após a criação


aluno.matricula = 12345

var novaProp = "sobrenome"
aluno[novaProp] = "Oliveira"

aluno["ultimo nome"] = "Mathias"

/////////////////////////////////////////////////////////////////////////////////////
// voce tambem pode criar um objeto assim

var escola = new Object()

escola.alunos = ["bianca", "matheus", "Igor"]

// console.log (aluno)
// console.log (escola)



// METODOS

// var laura = {
//     nome: "laura",
//     notas: [7, 8],

//     media: function (n1, n2) {
//         return (n1 * 2 + n2) / 3;
//     }
// }

// var Joao = {
//     nome: "Joao",
//     notas: [6, 8],

//     media: function (n1, n2) {
//         return (n1 * 2 + n2) / 3;
//     }
// }
// console.log (laura.nome)
// console.log (laura.media(laura.notas[0], laura.notas[1]))
    
// console.log (Joao.nome)
// console.log (Joao.media(Joao.notas[0], Joao.notas[1]))


// pra não precisar especificar a nota no console.log voce pode usar o "this."
// no return e fazer o proprio return pegar a nota e calcular pra voce

var laura = {
    nome: "laura",
    notas: [7, 8],

    media: function (n1, n2) {
        return (this.notas[0] * 2 + this.notas[1]) / 3;
    }
}

var Joao = {
    nome: "Joao",
    notas: [6, 8],

    media: function (n1, n2) {
        return (this.notas[0] * 2 + this.notas[1]) / 3;
    }
}



console.log (laura.nome)
console.log (laura.media())

console.log (Joao.nome)
console.log (Joao.media())

//caso voce tenha por exemplo que mudar o metodo de uma funcao mas pra varios objetos
//metodo mais facil seria voce criar essa funcao externa e incluir no objeto


function calcMedia(n1, n2) {
    return (this.notas[0] * 2 + this.notas[1]) / 3
}
// agora essa função "calcMedia" passa a funcionar apenas a objetos que tenham "notas"

var laura = {
    nome: "laura",
    notas: [7, 8],

    media: calcMedia
}

var Joao = {
    nome: "Joao",
    notas: [6, 8],

    media: calcMedia
}

console.log (laura.nome)
console.log (laura.media())

console.log (Joao.nome)
console.log (Joao.media())

// quando agente tem uma funcao de um objeto ela é um metodo daquele objeto
// quando agente tem uma variavel/chave de um objeto ela é uma propriedade daquele objeto
// um objeto pode ter propriedades e pode ter metodos
// e eles servem pra simplificar a abstração do mundo real