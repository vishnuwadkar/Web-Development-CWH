console.log("Harry is a Hacker")
console.log("Rohan is a Hecker")

setTimeout(()=>{
    console.log("I am inside set timeout")
},2000)     //this function will executed after entire script
//this is an asynchronous function

console.log("The end")

//CALLBACK FUNCTION
//It is an function which is passed into another fucntion as a argument     

const callback=(arg) => {
  console.log(arg)
}


const loadScript=(src,callback)=>{
    document.createElement(".script");
    sc.src = src;
    sc.onload = callback("Vishnu")
    document.head.append(sc)
}

//loadScript(script,callback)

//This callback functions becomes difficult to  manage and are complicated
//Thus we use PROMISE
//Promise is a promise of code execution
