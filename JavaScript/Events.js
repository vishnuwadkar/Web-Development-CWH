//EVENTS IN JAVASCRIPT
/*An Event is fired to notify the code of "interested changes" that may affect code execution!*/

//Syntax->
/* node.event =() =>{
    //code
    }
*/

let btn = document.querySelector("#btn1")
btn.onclick=()=>{
    console.log("Button was clicked through js")
}

//1.JS Event > Inline Event
//2.ON redefining handler, the previous event is overwritten

//Events Listners
//node.addEventListner(Event,callback) -> for adding events
const e=btn.addEventListener("dblclick",()=>{
    console.log("Button was clicked 2 times through Event Listner")
});

//node.removeEventListener(event,callback)
btn.removeEventListener(e,()=>{
    console.log("Event was removed!")
})

/*Q. Create a toggle buttin that changes the theme to dark mode on clicking and 
back to light mode on clicking again.*/

let modebtn = document.querySelector("#modebtn")    //selecting the button
let body = document.querySelector("body")       //selecting the body to change color
let mode = "light"  //creating a variable for mode 

modebtn.addEventListener("click",()=>{  //adding event listener
    if(mode=="light"){  //if light mode present
        console.log("dark")
        mode="dark"
        body.classList.add("dark")      //append class dark
        body.classList.remove("light")  //remove class light
    }
    else{   //if dark mode present
        console.log("light")
        mode="light"    //changing the mode variable 
        body.classList.add("light")     //append class light
        body.classList.remove("dark")   //remove class dark
    }
})