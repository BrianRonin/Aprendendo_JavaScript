////////////////////////////////////////////////////////////////////////////////////////////////////
//ou com uma função também mas inves de retornar ela vai ter seus valores

    function criarPedros(n, s) {

        this.nome = n
        this.sobrenome = s

    }

    var Pedro = new criarPedros ("Pedro", "mathias")
    
    console.log (Pedro)
    console.log (Pedro.nome)
    console.log (Pedro["sobrenome"])

/////////////////////////////////////////////////////////////////////////////////////////////////
// ou com uma função

function criarBrian(nome, sobrenome){

    return{
    nome: nome,
    sobrenome: sobrenome
    }
}

var Brian = criarBrian ("Brian", "Cristiano")

console.log(Brian)

///////////////////////////////////////////////////////////////////////////////////////////////////////
// da pra criar um objeto assim

var Igor = {
nome: "Igor",
sobrenome: "Oliveira"
}

console.log(Igor)
