/*Create a faulty calculator using javascript

This calc does the following:
1.Takes two number input from the user
2.It performs wrong operations as follow:
+ --> -
* --> +
- --> /
/ --> **
However it performs a wrong operation 10% of the times 
Note:Use Math.random()<0.1
*/

console.log(
    "Choose the operation: \n1.Sum\n2.Subt\n3.Multiply\n4.Divide"
)
let op = prompt("Select your operation:")
let num1=prompt("Enter no. one: ")
let num2=prompt("Enter no. two: ")

//performing the right operations
if (Math.random() < 0.1){

    function sum(a,b){
        console.log("The sum is :"+(a+b))
    }
    function  subtract(a,b){
        console.log("The diff is: "(a-b))           
        }
    function  multiply(a,b){
        console.log("The product is: "+(a*b))
    }
    function div(a,b){
        console.log("The division is: "+(a/b))
    }
    if(op==1){
        sum(num1,num2);
    }
    else if(op==2){
        subtract(num1,num2);
    }
    else if(op==3){
        multiply(num1,num2);
    }
    else{
        div(num1,num2);
    }
}
//performing wrong opertion
else{
    function wsum(a,b){
        console.log("The sum is :"+(a-b))
    }
    function  wsubtract(a,b){
        console.log("The diff is: "(a+b))           
        }
    function  wmultiply(a,b){
        console.log("The product is: "+(a/b))
    }
    function wdiv(a,b){
        console.log("The division is: "+(a**b))
    }
    if(op==1){
        wsum(num1,num2);
    }
    else if(op==2){
        wsubtract(num1,num2);
    }
    else if(op==3){
        wmultiply(num1,num2);
    }
    else{
        wdiv(num1,num2);
    }

}


