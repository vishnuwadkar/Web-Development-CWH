//Asynchronous Programming
console.log("One")
console.log("Two")
setTimeout(() => {
    console.log("Delay")
}, 3000)
console.log("Three")
console.log("four")
//here the four numbers will be printed first and then after three second delay the 'delay' will be printed
//thus the further funcs dont wait for the timeout, they are executed immediately
//thus this is ASYNCHRONOUS programming

//CALLBACKS
//Callbacks are the functions that are passed as an argument to another function
//Callbacks are used to handle the asynchronous operations
function sum(a, b) {
    console.log(a + b)
}

function other(a, b, sumfunc) {
    sumfunc(a, b)    //here another function will be called with a and b passed as argument
}

other(2, 3, sum)

//another way of defining callbacks
other(4, 5, (a, b) => {
    console.log(a - b)
})

function getData(data, getNextData) {
    setTimeout(() => {
        console.log("data: ", data)
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}

getData(1, () => {
    console.log("getting data 2")
    getData(2, () => {
        console.log("getting data 3")
        getData(3)      // multiple callbacks
    })
})
//this is an example of callback hell

//to solve the problem of callback hell, the concept of PROMISES is introduced

let myPromise = new Promise((resolve, reject) => {     //reject and resolve are 2 handlers or callbacks created internally by Javascript
    //resolve is a function that will be called when the promise is resolved
    console.log("I am a promise");
    resolve("I am resolved");   //this is any value that is passed to resolve
    //reject("some error")      if we want to reject with some value
})

// using promises in general programming
function getdata2(data, getodata) {
    return new Promise((resolve, reject) => {  //function that returns a new promise
        setTimeout(() => {
            console.log("data: ", data)
            resolve("success")  //resolving the promise
            if (getNextData) {
                getNextData()
            }
        }, 2000)
    })
}

let funcval = getdata2(); //will return a promise
funcval.then((res) => {  //only if promise resolved, res is the parameter passed during resolve
    console.log("Promise fulfilled")    //do this
})
//to catch the error
funcval.catch((err) => { //if promise not resolved i.e rejected, and err is parameter pr value passed for rejected
    console.log("error aa gaya!")
})