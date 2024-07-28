let button =  document.getElementById("btn")

button.addEventListener("click",()=>{       //here event is "click"
    alert("I was clicked. Yayy!")
    document.querySelector(".box").innerHTML = "<b>Yayy your were clicked</b>"
})
button.addEventListener("dblclick",()=>{        //here event is "doubleclick"
    document.querySelector(".box").innerHTML = "I was double clicked"
})
button.addEventListener("contextmenu",()=>{        
    alert("Right click")
})
document.addEventListener("keydown",(e)=>{        //takes the value of the key pressed
    console.log(e.key)
})


