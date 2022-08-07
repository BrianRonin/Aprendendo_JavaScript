function novoAluno(nome, idade){

    return {nome, idade}

}

let alunos = [

    novoAluno("Mario", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)


];

function idadeDaTurma (accumulator, item){
    console.log(accumulator)
    return accumulator + item.idade;
}

console.log(alunos.reduce(idadeDaTurma, 0))