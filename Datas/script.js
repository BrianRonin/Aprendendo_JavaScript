
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds)

var d = new Date (2020, 02, 16, 22, 45)

// se agente colocar apenas numero no date ele dara como 31 DEZ de 1969 as 4 da tarde
// e o numero que voce colocar sera os mile segundos apartir daquela data
// se agente usar tambem no console.log(getTime) ele mostrara os milesegundos deis daquela data

var d = new Date (1000 * 60 * 60 * 24)
// ou
var d = new Date (86400000)

// voce tambem pode utilizar strings pra usar a data mas tem que ser em ingles

var d = new Date("sep 05 2017 23:25")
// no mes voce pode colocar tanto o nome do mes em ingles ou numero mas tem que ser

// Mes/Dia/Ano/Hora:Minuto    //esse modelo americano//

var d = new Date("07 05 2017 23:25")
// Outra forma
var d = new Date("05/25/1999")

// existe a possibilidade de voce mudar alguma informacao da data pelo console log tambem

console.log(d.setMonth(01))

// voce tambem pode pegar apenas o ano ou dia segundos.. etc
// o getDay pega o dia da semana de 0 - 6 ja o getDate o dia do mes

console.log(d.getDay())
console.log(d.getDate())
console.log(d.getHours())
console.log(d.getFullYear())

//agente pode usar do numero do dia da semana e juntar com o index de um array
// convertendo o dia da semana pra pt

var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

console.log(dias[d.getDay()]) 