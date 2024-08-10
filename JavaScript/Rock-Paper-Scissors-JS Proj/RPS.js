let userScore = 0;
let compScore = 0;
const msg = document.querySelector(".result")
const choices = document.querySelectorAll(".choices")
let man = document.querySelector("#man")
let comp = document.querySelector("#comp")
let reset = document.querySelector("#reset")
let userb = document.querySelector(".userbox")
let compb = document.querySelector(".compbox")

const genCompChoice = () => {
    let opt = ["rock", "paper", "scissors"];
    let rdmChoice = opt[Math.floor(Math.random() * 3)];  //generating random number between 0 to 2
    return rdmChoice;
}

const winTrack=()=>{
    if(userScore > compScore){
        userb.style.border = "8px solid #11ff00"
        compb.style.border = "8px solid red"
    }else if(userScore < compScore){
        compb.style.border = "8px solid #11ff00"
        userb.style.border = "8px solid red"
    }
}

const gameDraw = (choiceId) => {
    console.log("Game Draw!")
    msg.innerText=`Game Draw! Computer also chose ${choiceId}`
    msg.style.backgroundColor = "yellow"
}
const showWinner = (userWin,compChoice) => {
    if (userWin) {
        msg.innerText=`You Win! Computer chose ${compChoice}`
        msg.style.backgroundColor = "#11ff00"
        userScore++;
        man.innerText = userScore
    } else {
        msg.innerText=`You Lost! Computer chose ${compChoice}`
        msg.style.backgroundColor = "red"
        compScore++;
        comp.innerText = compScore;
    }
}

const playGame = (choiceId) => {
    let compChoice = genCompChoice()
    console.log("comp choice", compChoice)
    
    if (choiceId == compChoice) {
        gameDraw(choiceId)
    } else {
        let userWin = true;
        if (choiceId === "rock") {
            //scissors or paper
            userWin = compChoice === "paper" ? false : true
        } else if (choiceId === "paper") {
            //rock or scissors
            userWin = compChoice === "scissors" ? false : true
        }
        else {   //user has scissors
            //rock or paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin,compChoice)
        winTrack()
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiceId = choice.getAttribute("id")
        console.log("Choice was clicked!", choiceId)
        playGame(choiceId)
    })
})

reset.addEventListener("click",()=>{
    userScore = 0;
    man.innerText = userScore
    compScore = 0;
    comp.innerText = compScore;
    msg.innerText = "Choose your move!"
    msg.style.backgroundColor = "white"
    })
