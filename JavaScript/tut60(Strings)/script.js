console.log("Hey this is strings tutorial!")
//Note: Strings are immutable i.e once declared will not be modified
//declararion of the string variable
let a="Harry"
//printing the string:
console.log(a);

//acessing particular character of string like an array
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);  //will show undefined  because there are no characters after index 4

//methods
console.log(a.toUpperCase())        //converts string to uppercase
console.log(a.toLowerCase())        //converts string to lower case
console.log(a.length)                     //returns length of the string


//slicing
console.log(a.slice(1,4))       //returns  Harry from 1st index to 3rd i.e "arr"

//replacing
console.log(a.replace("ar","77"))
//if two occurences, will replaced the first occurence only

//concatinating: Concatinating two strings
let b= "Vishnu"
console.log(a.concat(b));  //a+b
console.log(a.concat(b,"Rahul"));  //adding strings with concat

//Template Literal Syntax
//use backtick-> `...`
let rname= "John";
let friend = "Vivek";
console.log(`His name is ${rname} and his friend's name is ${friend}!`)
//also we can use double quotes inside backtick