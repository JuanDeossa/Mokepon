// Golbar Var ----|
let mokeponSelected;
let playerVitalPoints = 2;
let botVitalPoints = 2;
let Attacks = ["Fire","Water","Earth"];
let botAttackSelected;
const resultMessages = {
    won: "You Won",
    lose: "You Lose",
    draw: "Draw"
}
// Golbar Var ---->


// Document Element Assignments ----|
//Sections.
const mokeponSelection = document.querySelector(".Mokepon-selection")
const stats = document.querySelector(".Stats")
const attackSelection = document.querySelector(".Attack-selection")
const attackMessage = document.querySelector(".Attack-message")
const restart = document.querySelector(".Restart")
//Stats.
const playerStats = document.querySelector(".Stats__player")
const botStats = document.querySelector(".Stats__bot")
//Mokepones.
const Hipodoge = document.querySelector("#Hipodoge")
const Capipepo = document.querySelector("#Capipepo")
const Ratigueya = document.querySelector("#Ratigueya")
const mokeponSubmitBtn = document.querySelector(".Mokepon-selection__btn")
//Attacks
const fireAttack = document.querySelector(".Attack-selection_Fire")
const waterAttack = document.querySelector(".Attack-selection_Water")
const earthAttack = document.querySelector(".Attack-selection_Earth")
const playerAttack = document.querySelector(".Attack-message__player")
const botAttack = document.querySelector(".Attack-message__bot")
//Message
const resultMessage = document.querySelector(".Attack-message__Result")
// Document Element Assignments ---->


// Function Definitions ----|
//Initial Conditions (1).
function initialCoinditions() {
    stats.classList.add("inactive");
    attackSelection.classList.add("inactive");
    attackMessage.classList.add("inactive");
    restart.classList.add("inactive");
    playerStats.innerHTML=playerVitalPoints
    botStats.innerHTML=botVitalPoints   
    // ---> OUT
}
//Select Mokepon (2).
function selectMokepon() {
    if (Hipodoge.checked) {
        mokeponSelected = Hipodoge.id
        selectAttack() // ---> OUT
    }else if (Capipepo.checked) {
        mokeponSelected = Capipepo.id
        selectAttack() // ---> OUT
    }else if (Ratigueya.checked) {
        mokeponSelected = Ratigueya.id
        selectAttack() // ---> OUT
    }else {
        alert("Choose a Mokepon");
    }
}
// Select Attack (3).
function selectAttack() {
    mokeponSelection.classList.add("inactive")// ---> Reset
    stats.classList.remove("inactive");// ---> Reset
    attackSelection.classList.remove("inactive");// ---> Reset
}
// Match Result (4).
function matchResult() {        
        let player = this.name
        let bot = randomItem(Attacks);
        if ((player==="Water" && bot==="Fire")||(player==="Earth" && bot==="Water")||(player==="Fire" && bot==="Earth")){
            botVitalPoints--
            resultMessage.innerHTML=resultMessages.won
        }
        else if(player===bot){
            resultMessage.innerHTML=resultMessages.draw
        }
        else{
            playerVitalPoints--
            resultMessage.innerHTML=resultMessages.lose
        }
        if ((playerVitalPoints===0)||(botVitalPoints===0)) {            
            attackSelection.classList.add("inactive")
            restart.classList.remove("inactive")
        }
        attackMessage.classList.remove("inactive");
        playerAttack.innerHTML=player
        botAttack.innerHTML=bot
        playerStats.innerHTML=playerVitalPoints
        botStats.innerHTML=botVitalPoints
}
// Random Item
function randomItem(Array) {
    return Array[Math.floor(Math.random()*Array.length)];
}
// Function Definitions ---->


// Event listeners ----|
// Initial Loadpage
window.addEventListener("load",initialCoinditions)
// 
// Mokepon Selection Button 
mokeponSubmitBtn.addEventListener("click",selectMokepon)
// 
// Attack Buttons 
fireAttack.addEventListener("click",matchResult)
waterAttack.addEventListener("click",matchResult)
earthAttack.addEventListener("click",matchResult)
// 
// Event listeners ---->



// Code Flow ----|

// Code Flow ---->
