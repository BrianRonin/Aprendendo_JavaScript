let nome = ""

try {

    if (nome == ""){
        throw "o nome não pode ser vazio"
    }


    console.log(nome)
} catch(error){

    console.log(`Houve um erro ${error}`)
}finally{
    console.log("Boa noite")
}