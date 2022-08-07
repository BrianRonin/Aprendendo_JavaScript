//Agente vai aprender a manipular o DOM manipular o Document pelo chrome
//Usando JS

// Todo HTML o JS enxerga como strings "HTML"

// Ao atualizar a pagina toda sua alteração feita no chrome e perdida
// mas ao limpar nao perde

//acessa o Document
Document
//Acessa o Body do Document
Document.body

// Cada tag HTML no JS pode ser transformado em objeto JS
// Podendo manipular o  HTML atraves do JS CHROME POR EXEMPLO
// Podendo Modificar, Criar e Excluir HTML Atraves do JS

//exemplo
document.body.innerHTML = "<h1>Esse título foi inserido no JS"
+document.body.innerHTML

//Porem voce precisa colocar o
//+document.body.innerHTML //senão ele vai substituir todo corpo

//Você pode puxar um elemento pelo id ou class no JS assim
// pois não daria pra puxar assim document.body.p

document.getElementById("p1")
document.getElementsByClassName("paragrafo")

// aqui eu posso pegar qualquer tag como <h1></h1> e colocala em uma variavel
document.getElementsByTagName

// mas pra poder manipular esse elemento voce precisa
// colocar ele em uma variavel podendo ser var, let, const assim

let variavel = document.getElementById("p1")

// O JS enxerga os elementos como array ["item1", "item2"]

let paragrafos = document.getElementsByClassName("paragrafo")
let th = document.getElementsByTagName("h1") //todos <h></h>
let tp = document.getElementsByTagName("p") //todos <p></p>
let d = document

//eu posso imprimir essas variaveis que eu criei tambem assim

tp // ou tp[0], tp[1] etc
th // ou th[0], th[1] etc

// uma outra forma de mostrar os <p><p/> de uma classe especifica usando for
for(let p of paragrafos){console.log(p)}

// Agora apos criar uma variavel do item html desejado
// voce pode alteralo assim

// modifica apenas o texto
variavel.innerText = "Novo conteudo"
// modifica apenas o texto
variavel.textContent = "Novo conteudo"
// modifica o texto e aceita HTML
variavel.innerHTML = "<h2>Novo conteudo</h2>"

// a diferença do innerText e textContent esta ao mostrar o conteudo
// não editalo, textContent vai mostrar mais como esta o HTML no conteudo
// ja o textContent mais como esta na tela do site

tp.textContent
tp.innerText 

// voce pode alterar a classe da variavel tambem no JS seria assim

p1.className = "" // Se não colocar nada ele perde a classe simplesmente
// isso funciona só com atributos classicos

// posso tambem simplesmente criar um atributo que na verdade sempre esteve la
// e editalo como a cor style da variavel p1 que é um id de um <p></p>
p1.style = "colo:blue"

// agora pra acessar atributos não classicos, criados, é assim:
p1.getAttribute("meuatt")
// alterar
p1.setAttribute("meuatt", "Mathias")
// tambem posso criar atributos assim
p1.setAttribute("NovoAtributo", "Ronin")