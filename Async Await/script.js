let usuarios = ["Adriano", "Marcia", "José"]



function inserirUsuario(nome){

    //promisse é como um objeto que vai receber como argumento uma função como callback
    //
    let promise = new Promise(function(resolve, reject){

        setTimeout(()=>{
            usuarios.push(nome) 
            let error = false;

            if (!error) {
                resolve();
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
//async function ou função sincronizada serve só pra poder usar o await
async function executar(){
//await só é valido pra funções do tipo async 
//await vai fazer com que espere essa função com ela seja resolvida pra poder
//ir pra proxima
    await inserirUsuario("Brian")
    listarUsuarios()

}

executar()