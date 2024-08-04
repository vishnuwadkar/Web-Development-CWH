// console.dir() -> prints properties and methods of special objects
// window is a global object 

//window and window.document are same since window is an global object

//document.body.childNodes[n] ->accessing child nodes

//document.body.childNodes[1].innerHTML = "Hello World!"      //altering the inner html of an element!

//Accessing HTML through Javascript

// 1.document.body -> accessing body object inside the document 

//DOM MANIPULATION
//1.Selecting with id
let fdiv = document.getElementById("fdiv")
console.dir(fdiv)

//2.Selecting with classes
let fclass = document.getElementsByClassName("fclass")
console.dir(fclass)

//selecting with tag
let stag = document.getElementsByTagName("h2")
console.dir(stag)

//Query Selector
let ele = document.querySelectorAll(".common")
console.dir(ele)

//PROPERTIES
// 1.tagName -> returns tag for element nodes
console.dir(fclass.tagName)

//2.innerText ->returns pure text content of elements and all its childern 
console.log(fdiv.innerText)

//3.innerHTML ->returns the plain text or HTML contents
console.log(fdiv.innerHTML)

//4.textContent -> returns the textual content even of hidden elements

//Q. Append "Apna College" to h2 heading
let heading = document.querySelector("h2")
heading.innerText = heading.innerText + " Apna College!"

//Q.Access all the divs with "common" class and give them unique texts
let udiv = document.getElementsByClassName("common")
let i = 1
for(let sdiv of udiv){
    sdiv.innerText = `Unique text ${i}`;
    i++;
}

