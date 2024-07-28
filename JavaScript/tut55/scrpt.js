console.log("Hello World")

var a = 5;
var b = 6;
console.log(a+b);

{
    let c=7;
    console.log(c);
    c=c+1;
    console.log(c);
}
//datatypes in JS: Primitive and Object
//Primitive datatypes: null, undefined, number, boolean, string, bigint, symbol
let x = "Vishnu";
let y = 3;
let z = 9.23;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

//Object: Combination of Key-Value pair
let o = {
    "name" : "Vishnu", "job role":"5600"
}
console.log(o); 

//changing obj
o.name="Harry";
console.log(o); 

o.salary=700;
console.log(o); 