// Function in JS 
// ->when we want to execute a block of code multiple times in a code


/*func syntax
function function_name(parameters){
    codeblock
}*/

function Greet(name) {
    console.log("Hello "+name+" How are you?")
}
Greet("Harry")      //invoking a function
Greet("Vishnu")     //invoking a function

function sum(a,b,x=0){      //here, c is a default parameter and is used when c is not passed
    let c=a+b+x;
    console.log("The sum is: "+c);
}
//use return keyword to return a value

sum(1,2)
sum(67,34,2)

//Arrow function
//we can put a fucntion in a variable
let func= (y) =>{
    console.log("This is an arrow func "+y)
}
func('Hi')
func("Vishnu")
//here func acts as a variable as well as a function