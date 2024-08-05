// console.dir() -> prints properties and methods of special objects
// window is a global object 
// console.dir(window)
// console.dir(document)

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

//ATTRIBUTES
//1.getAttributes(attr) -> to get the value of the attribute
let id = document.querySelector("#fdiv")
console.log(id.getAttribute("id"))

//2.setAttribute(attr, value) -> to set the value for any attribute
let eg = document.querySelector(".common") 
eg.setAttribute("class","uncommon")     //changes class from "common" to "uncommon"

//style Attribute ->changing CSS through Javascript
eg.style.backgroundColor = "red";
eg.style.fontSize = "20px"

//inserting elements
//create -> add

// 1.creating element -> document.createElement("element name")
let newel = document.createElement("button")    //created!
newel.innerText = "Hello World!"

//2.append() -> add to end(inside) node.append(newel)
let newdiv = document.querySelector(".new")
newdiv.append(newel);   //appending

//3.prepend() -> adds at the beginning(inside) node.prepend(newel)
newdiv.prepend(newel);

// 4.before() ->adds at the beginning(outside) node.before()
let newhead = document.createElement("h1")
newhead.innerText = "This is a new head"
document.querySelector(".new").before(newhead)

//5.after() ->adds at the end(outside)

//Deleting element -> deletes any node
//node.remove()
newhead.remove()

//classList -> collection of class attributes for an element and is used to append a new class

//elem.classList.add() ->add new class
//elem.classList.remove() ->delete existing class
newdiv.classList.add("newclass");


