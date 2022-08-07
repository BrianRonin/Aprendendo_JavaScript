let usuarios = ["Adriano", "Marcia", "José"]



function inserirUsuario(nome){

    //promisse é como um objeto que vai receber como argumento uma função como callbac
    //
    let promise = new Promise(function(resolve, reject){

        setTimeout(()=>{
            usuarios.push(nome) 

            let error = true

            if(!error){
                resolve()
            }else{
                reject({msg: "Erro de alguma coisa"})
            }
        }, 1000);
    })
    return promise;

   
}
function listarUsuarios(){
    console.log(usuarios)
}
            //.then só vai executar quando der o resolve
inserirUsuario("Brian")
    .then(listarUsuarios)
    .catch((error)=>{
        console.log(error.msg)
})