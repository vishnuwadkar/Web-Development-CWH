async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
} 
let a= await sleep()
let b= await sleep()    //this will produce an error
//we will need to create an async func
//for this we use IIFE
//IIFE is creating a function and immediately invoking it
//syntax of IMMEDIATELY INVOKED FUNCTION EXPRESSION:
(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()
//this function will be invoked immediately!