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
//node.EventListner(Event)