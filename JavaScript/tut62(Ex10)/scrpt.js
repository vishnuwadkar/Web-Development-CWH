/*Create a business name generator by combining a list of adjectives and shop name and another word

Adjectives:
Crazy, Amazing, Fire

Shop Name:
Engine, Foods, Garments

Another words:
Bros, Limited, Hub
*/
//**************BUSINESS NAME GENERATOR************

let adj = {
    a: "Crazy",
    b: "Amazing",
    c: "Fire"
}
let shop = {
    a: "Engine",
    b: "Foods",
    c: "Garments"
}
let words = {
    a: "Bros",
    b: "Hub",
    c: "Limited"
}

function Generatename() {
    //selecting random words using math.random
    let r1 = Math.random()
    let r2 = Math.random()
    let r3 = Math.random()

    //to select random adjective
    let fadj
    if (r1 < 0.33) {
        fadj = adj.a
    }
    else if (r1 < 0.66) {
        fadj = adj.b
    }
    else if (r1 < 1) {
        fadj = adj.c
    }

    //to select random shop
    let fshop
    if (r2 < 0.33) {
        fshop = shop.a
    }
    else if (r2 < 0.66) {
        fshop = shop.b
    }
    else if (r2 < 1) {
        fshop = shop.c
    }

    //to select random word
    let fword
    if (r3 < 0.33) {
        fword = words.a
    }
    else if (r3 < 0.66) {
        fword = words.b
    }
    else if (r3 < 1) {
        fword = words.c
    }

    console.log(`The generated name is ${fadj} ${fshop} ${fword}`)   //printing the words
}

Generatename()      //function execution