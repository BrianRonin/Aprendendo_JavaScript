
function speakGeneric(){
    console.log(this.sound)

}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

//dog.speak()
//cat.speak()

//    é possivel usar o this com o .bind(variavel)
let bidendedFunction = speakGeneric.bind(cat)

bidendedFunction()