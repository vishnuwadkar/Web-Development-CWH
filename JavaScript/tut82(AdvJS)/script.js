async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },4000);
    })
} 
/*let a= await sleep()
let b= await sleep()*/    //this will produce an error
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

//DESTRUCTURING
// let x, y = [1,5]
let [x, y] = [1,5]      //Thus x and y will be assigned with 1 and 5
console.log(x,y)
/* if we want to assign numbers from set to variables and 
then assign the remaining numbers to a third array then we use the
concept of destructuing*/
let [p, q, ...vari] = [1, 2, 3, 4, 5, 6]    //vari is any variable
console.log(p, q , vari)

//we can do this for values of objects as well
let obj = {a:1, b:2, c:3}
let {a, b}= obj;    //now a and b will become variables and will be assigned with values

//SPREAD SYNTAX
//spread syntax is used to spread the elements of an array or object into a new array or object

//consider a sum func
function sum(a,b){
    return a+b;
}

// lets create an array
let arr = [1,2,3]
console.log(arr[0]+arr[1]+arr[2])   //one way of doing sum
console.log(sum(arr[0],arr[1],arr2))    //another way of doing
console.log(sum(...arr))    //this is the syntax of SPREAD function
//it opens the array giving the arguments to the function

/*Javascript has three types of scopes
1. Global scope-> variable declared without any block or fucntion
2. Local scope-> variable declared in a block
3. Block scope-> variable declared in a block using let and const
*/


//HOISTING in JS
/*HOISTING is the process of moving the variable declarations to the top of the script before execution(using var)
var declaration goes at top of the block for local variable i.e even if we declare it below the application it will 
still run !
This wont work for let*/

//even functions get hosted except 'const' func!