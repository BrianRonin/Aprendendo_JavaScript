//programação funcional

//high ordern function
//funcao filter



function novoAluno(nome, idade){

    return {nome, idade}

}

let alunos = [

    novoAluno("Mario", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)


];
let jogadores = [

    novoAluno("Brian", 23),
    novoAluno("Marta", 45),
    novoAluno("Maria", 29),
    novoAluno("betania", 35)


];
///////////////////////////////  FORMA DE FAZER SEM O FILTER  ///////////////////////////////////////////////////////////////////////
// for (let aluno of alunos){
//     if(aluno.idade < 30){
//         console.log(aluno.nome)
//     }
// }


function filtro(callback) {
    let alunosFiltrados = []
    for (let mulecada of this) {
        if (callback(mulecada)) {  //oque o filter faz
            alunosFiltrados.push(mulecada)
        }
    }
    return alunosFiltrados
}

alunos.filtro = filtro

jogadores.filtro = filtro

console.log(jogadores.filtro(temMenosde30))

//////////////////////////////  USANDO O .FILTER //////////////////////////////////////////////////////////////////////////

function temMenosde30(cavalo){
    return cavalo.idade < 30
}
function temMaisde30(cavalo){
    return cavalo.idade > 30
}
//.filter vai fazer todo o trabalho de retornar um array só com o retorno da função
//do argumento sem usar push etc
let alunosComMenosde30 = alunos.filter(temMaisde30)

console.log(alunosComMenosde30)