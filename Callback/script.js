

function ola(){
    console.log("olaaa")
}

function tchau(){
    console.log("tchau otario")
}


function saudação(s,nome){

    s()//<--callback ou "ligue de volta" é isso, ele vai tar ligando
//             devolta uma outra função que estiver no argumento "s"
    console.log(nome) //e dando console.log no segundo argumento
}
 

saudação(tchau, "igor")




let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsuario(nome, callbackkk){
    setTimeout(()=>{
        
    //.push serve pra inserir coisas    
        usuarios.push(nome) 
        callbackkk()
    }, 4000);
   
// outra forma de usar callback serve pra fazer algo que não seja em tempo real, assincro sem sincronia
// mas que agente queira executar uma coisa só depois de uma coisa acontecer pra isso que serve o callback 
}
function listarUsuarios(){
    console.log(usuarios)
}

inserirUsuario("Igor", listarUsuarios)
