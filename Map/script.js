function novoAluno(nome, idade){

    return {nome, idade}

}

let alunos = [

    novoAluno("Mario", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)


];

function nomeidade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos"
}

function AlunoDaquiA5Anos(aluno){ //uma outra forma
    return{ //importante usar o return pra não alerar a fonte e apenas copiar
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}
//diferente do filter map cria um array totalmente novo do antigo não filtrando
console.log(alunos.map(nomeidade))
console.log(alunos.map(AlunoDaquiA5Anos))

/////////////////////////  VALOR vs REFERENCIA  //////////////////////////////////////////////////////////////////////

//quando agente faz isso "A = B" o "B" passa a ter o "A" como referencia
//fazendo com que todas mudanças no a passa a ter no B e vise versa
//mas tem formas de caunterar isso por exemplo

let turmaA = ["Brian", "Bianca", "Jose"]

let turmaB = turmaA.slice() //.slice vai fazer retornar uma copia para B
//não deixando o A como B como referencia fazendo alterações no B não afetar o A

//let turmaB = [...turmaA] //outra forma

turmaB.push("Igor")

////////////////////////  AGORA COM OBJETOS  /////////////////////////////////////////////////////

let alunoA = {nome:"igor", idade:15}

let alunoB = Object.assign({},alunoA)//.assign cria uma copia não deixando
// o A como B como referencia fazendo alterações no B não afetar o A

//let alunoB = {...alunoA} //outra forma

alunoB.idade = 2