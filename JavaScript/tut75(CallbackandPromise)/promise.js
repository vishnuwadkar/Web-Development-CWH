console.log('This is promise');

/*Settle means reolve or reject
=>resolve means promise has settled successfully
=>reject means promise has not settled successfully*/

let prom1 = new Promise((resolve, reject)=>{ 
    let a = Math.random();    //`new` is a promise constructor which takes two things: resolve and reject
    if(a<0.5){
        reject("No random number was supporting you!")
    }
    else{
        setTimeout(()=>{
            console.log('Yes I am done');
            resolve("Harry")
        },1000);
    }

})
let prom2 = new Promise((resolve, reject)=>{ 
    let a = Math.random();    //`new` is a promise constructor which takes two things: resolve and reject
    if(a<0.5){
        reject("No random number was supporting you! 2")
    }
    else{
        setTimeout(()=>{
            console.log('Yes I am done 2');
            resolve("Harry2")
        },500);
    }

})

// prom1.then(()=>{        //when prom1 resolved
//     console.log('a');      //then print the value with which it resolved, here harry
    
// }).catch((err)=>{       //catching the error
//     console.log('err');     //printing the error
//     //when unexpected errors occur, this concept is used
// })


//this is used in network requests

//PROMISE API
//There are 6 static method of Promise class

let prom3= Promise.all([prom1,prom2])
prom3.then((a)=>{
    console.log(a);
    
}).catch(err=>{
    console.log(err);
    
})
//will print both values if both the promises are resolved

// Promise.allSettled(promises)->> Even if reolved or rejected we will get reason or value

//Promise.race(promises) ==> waits for the first promise to fulfiland its result will become the outcome

//Promise.resolve(value) ==>make a resolvedpromise with a given value

//Promise.any(promises) ==> similar to race but without rejection

//Promise.reject(error) ==> makes arejected promise with a given error