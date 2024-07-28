//types of loops in Javascript

//1.For loop-> Runs a block of code for no. of times.
/*for(let i=0;i<100;i++){
    console.log(i);
}*/

//2.For in loop-> Loops through keys of object
let obj={
    name:"John", 
    loop:"Prog",
    company: "CWH"
}
for  (let key in obj) {
    console.log(key)
}

//3.For of loop
/*used for iterable datastructure */
for (const iterator of "John") {
    console.log(iterator);
}

//5.While loop-> Loops a block on specific conditions
let i=0;
while(i<6){
    console.log(i)
    i++;
}


//6.do-while loop-> While loop variant which runs atleast once
let j=10;
do {
    console.log(j)
    j++;
} while (false);
