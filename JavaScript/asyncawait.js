/*ASYNCHRONOUS PROGRAMMING*/

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

//working of promise
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000)
    })
}
//now consider another async func returning data after same time
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")
        }, 4000)
    })
}
//calling the function
/*console.log("fetching data...")
let p1 = asyncFunc()
p1.then((res)=>{
    console.log(res)
})

console.log("fetching data...")
let p2 = asyncFunc2()
p2.then((res)=>{
    console.log(res)
})*/
//writing these functions normally will print the two results at same time
//thus we use Promise chaining

console.log("fetching data...")
let p1 = asyncFunc().then((res) => {  //returns a promise
    console.log("fetching data...")
    asyncFunc2().then((res) => { })    //returns another promise 
})
//this is Promise chaining!

//solving above callback hell with promise chain:
function getDatax(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", dataid)
            resolve("success")
        }, 4000)
    })
}

//function call through a Promise chain
console.log("getting data 1...")
getDatax(1)
    .then((res) => {
        console.log("getting data 2...")
        return getDatax(2)
    })
    .then((res) => {
        console.log("getting data 3...")
        return getDatax(3)
    })
    .then((res) => {
        console.log(res)
    })
//this is an actual promise chain!
//this does the same work as callback hells but the code is comparatively easier to comprehend

//However we have a more better way to do this which is easier and less complex

//ASYNC-AWAIT

/*async function always returns a promise 
await pauses the execution of its surrounding async function until the promise is settled 
await is used inside an async function only*/

function api() { //a normal timeout function that returns a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data!")
            resolve(200)
        }, 2000)
    })
}

async function getapi() {    //an async function in which we will wait for timeout
    await api();    //first this will execute after two second   
    await api();    //later this will execute after more two seconds
}

//using the above getdatax function with async await
async function getdatay() {  //a new async func to use await
    console.log("getting data 1...")
    await getDatax(1)   //wait for 2 secs
    console.log("getting data 2...")
    await getDatax(2)   //after execution of above func, wait two more sec to execute this func
    console.log("getting data 3...")
    await getDatax(3)
    console.log("getting data 4...")
    await getDatax(4)
}
getdatay(); //function call

//THUS WE CONCLUDE -> Callbacks << Promises << Async-Await

//However, to use an async fucntion we need to create a new async function which is an unneccessary call
//to avoid this, we use the concept of 
//IMMEDIATELY INVOKED FUNCTION EXPRESSION- IIFE
//IIFE does not have any name and is used only once i.e at the time of definition
(async function () {
    console.log("getting data 1...")
    await getDatax(1)   //wait for 2 secs
    console.log("getting data 2...")
    await getDatax(2)   //after execution of above func, wait two more sec to execute this func
    console.log("getting data 3...")
    await getDatax(3)
    console.log("getting data 4...")
    await getDatax(4)
})();      //this is an IIFE function that will be executed immediately 
