const URL ="https://cat-fact.herokuapp.com/facts"    //a free API for getting facts related to cats
const fact = document.querySelector(".fact")
const fact2 = document.querySelector(".fact2")
const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#btn2")
let data

const getFacts = async ()=>{
    console.log("getting data...")
    let response = await fetch(URL)   //fetch method(get)
    console.log(response)
    data = await response.json();   //convert into json format
    // console.log(data[0].text)   //text is method in the returned object
    for(let i=0; i<5;i++){
        fact.innerHTML += data[i].text+"<br>"
    }
}
btn.addEventListener("click",getFacts)

//doing the same with promise chaining 
function getFacts2(){
    return fetch(URL)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        for(let i=0; i<5;i++){
            fact2.innerHTML += data[i].text+"<br>"
        }
    })
}
    btn2.addEventListener("click",getFacts2)
