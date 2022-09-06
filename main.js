// Golbar Var ----|
let mokeponSelected;
let playerVitalPoints = 2;
let botVitalPoints = 2;
let Attacks = ["Fire","Water","Earth"];
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
//Mokepones.
const Hipodoge = document.querySelector("#Hipodoge")
const Capipepo = document.querySelector("#Capipepo")
const Ratigueya = document.querySelector("#Ratigueya")
const mokeponSubmitBtn = document.querySelector(".Mokepon-selection__btn")
//Attacks
const fireAttack = document.querySelector(".Attack-selection_Fire")
const waterAttack = document.querySelector(".Attack-selection_Water")
const earthAttack = document.querySelector(".Attack-selection_Earth")
// Document Element Assignments ---->


// Function Definitions ----|
//Initial Conditions (1).
function initialCoinditions() {
    stats.classList.add("inactive");
    attackSelection.classList.add("inactive");
    attackMessage.classList.add("inactive");
    restart.classList.add("inactive");
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
    console.log(mokeponSelected);
}
// Select Attack (3).
function selectAttack() {
    mokeponSelection.classList.add("inactive")// ---> Reset
    stats.classList.remove("inactive");// ---> Reset
    attackSelection.classList.remove("inactive");// ---> Reset
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
