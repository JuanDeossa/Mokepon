
// Global Var ----|
class Mokepon{
    constructor(type,name,lifes,attacks,image){
        this.type=type,
        this.name=name,
        this.lifes=lifes,
        this.attacks=attacks,
        this.image=image
    }
}
const HypoDoggo = new Mokepon(
    "Water",
    "HypoDoggo",
    2,
    [
    {type:"Water", id: "Water-Btn"},
    {type:"Water", id: "Water-Btn"},
    {type:"Water", id: "Water-Btn"},
    {type:"Earth", id: "Earth-Btn"},
    {type:"Fire", id: "Fire-Btn"}
    ],
    "https://i.postimg.cc/v4hyPMsB/Hypo-Doggo.png"
)

const GreeMster = new Mokepon(
    "Earth",
    "GreeMster",
    2,
    [
    {type:"Earth", id: "Earth-Btn"},
    {type:"Earth", id: "Earth-Btn"},
    {type:"Earth", id: "Earth-Btn"},
    {type:"Fire", id: "Fire-Btn"},
    {type:"Water", id: "Water-Btn"},
    ],
    "https://i.postimg.cc/SXKh35SG/Gree-Mster.png"
)
const FyreRatt = new Mokepon(
    "Fire",
    "FyreRatt",
    2,
    [
    {type:"Fire", id: "Fire-Btn"},
    {type:"Fire", id: "Fire-Btn"},
    {type:"Fire", id: "Fire-Btn"},
    {type:"Water", id: "Water-Btn"},
    {type:"Earth", id: "Earth-Btn"},
    ],
    "https://i.postimg.cc/d7SYYBDc/FyreRatt.png"
)
// const FyreFozz = new Mokepon(
//     "Fire",
//     "FyreFozz",
//     2,
//     [
//     {type:"Fire", id: "Fire-Btn"},
//     {type:"Fire", id: "Fire-Btn"},
//     {type:"Fire", id: "Fire-Btn"},
//     {type:"Water", id: "Water-Btn"},
//     {type:"Fire", id: "Earth-Btn"},
//     {type:"Earth", id: "Earth-Btn"},
//     {type:"Earth", id: "Earth-Btn"},
//     ],
//     "https://i.postimg.cc/d7SYYBDc/FyreRatt.png"
// )

const resultMessages = {
    won: "You Won",
    lose: "You Lose",
    draw: "Draw",
    Winner: "",
    Unselected: "Please, select a Mokepon"
}
//
let mokeponDB=[HypoDoggo,GreeMster,FyreRatt]
// mokeponDB.push(FyreFozz)
let mokeponPlayerSelected
let playerVitalPoints
let mokeponAISelected
let AIVitalPoints
let playerAttackSelected
let AIAttackSelected
// Global Var ---->


// Document Element Assignments ----|
//Sections
const mokeponContainer = document.querySelector(".Mokepon-selection__container")
const mokeponSelectionSection = document.querySelector(".Mokepon-selection")
const statsSection = document.querySelector(".Stats")
const attackSelectionSection = document.querySelector(".Attack-selection")
const matchMessageSection = document.querySelector(".Match-message")
const restartSection = document.querySelector(".Restart")
//Stats
const playerStats = document.querySelector(".Stats__player")
const botStats = document.querySelector(".Stats__bot")
//Mokepones
const Hipodoge = document.querySelector("#Hipodoge")
const Capipepo = document.querySelector("#Capipepo")
const Ratigueya = document.querySelector("#Ratigueya")
const mokeponSubmitBtn = document.querySelector(".Mokepon-selection__btn")
//Attacks
const attacksContainer = document.querySelector(".Attack-selection__container")
const fireAttack = document.querySelector(".Attack-selection_Fire")
const waterAttack = document.querySelector(".Attack-selection_Water")
const earthAttack = document.querySelector(".Attack-selection_Earth")
const playerAttack = document.querySelector(".Match-message__player")
const botAttack = document.querySelector(".Match-message__bot")
//Message
const playerName = document.querySelectorAll(".Player-Name")
const botName = document.querySelectorAll(".Bot-Name")
const resultMessage = document.querySelector(".Match-message__Result")
//Restart
const restartBtn = document.querySelector(".Restart__button")
// Document Element Assignments ---->


// Function Definitions ----|
// Render Mokepons (0).
function renderMokepons(array) {
    array.forEach(MokeponOBJ => {
        mokeponContainer.innerHTML+=`
        <div class="mokepon">
            <label for=${MokeponOBJ.name}>${MokeponOBJ.name}</label>
            <input id=${MokeponOBJ.name} type="radio" name="Mokepon">
        </div>`
    });
}
// Render Attacks (2.5).
function renderAttacks(array,mokepon) {
    array.forEach(MokeponOBJ => {
        if (MokeponOBJ.name===mokepon) {
            MokeponOBJ.attacks.forEach(element => {
                let button = (`<button class="Attack-selection__btn Attack-selection_${element.type}" name=${element.type}>${element.type}</button>`)
                attacksContainer.innerHTML= attacksContainer.innerHTML + button
            });
        }
    });
    document.querySelectorAll(".Attack-selection__btn").forEach(item => {
        item.addEventListener("click",matchResult)
    });
}
// Initial Conditions (1).
function initialCoinditions() {
    renderMokepons(mokeponDB)
    mokeponSelectionSection.classList.remove("inactive")
    statsSection.classList.add("inactive")
    attackSelectionSection.classList.add("inactive")
    matchMessageSection.classList.add("inactive")
    restartSection.classList.add("inactive")
    // ---> OUT
}
// Select Mokepon (2).
function selectMokepon() {
    mokeponDB.forEach(element => {
        if (document.querySelector(`#${element.name}`).checked) {
            mokeponPlayerSelected = element.name
            playerVitalPoints = element.lifes
            selectAttack()
        }
    })
    if (mokeponPlayerSelected===undefined) {
        alert(resultMessages.Unselected)
    }
}
// Select Attack (3).
function selectAttack() {
    renderAttacks(mokeponDB,mokeponPlayerSelected)
    let AISelection = randomItem(mokeponDB.map(function (i) {return [i.name,i.lifes]}))
    mokeponAISelected=AISelection[0]
    AIVitalPoints=AISelection[1]
    for (const iterator of playerName) {
        iterator.innerHTML=mokeponPlayerSelected
    }
    playerStats.innerHTML=playerVitalPoints
    botStats.innerHTML=AIVitalPoints
    for (const iterator of botName) {
        iterator.innerHTML=mokeponAISelected
    }
    mokeponSelectionSection.classList.add("inactive")// ---> Reset
    statsSection.classList.remove("inactive");// ---> Reset
    attackSelectionSection.classList.remove("inactive");// ---> Reset
}
// Match Result (4).
function matchResult() {
    playerAttackSelected = this.name
    mokeponDB.forEach(i=>{(mokeponAISelected===i.name)?(AIAttackSelected=i.attacks[Math.floor(Math.random()*(i.attacks.length))].type):""})
    console.log(playerAttackSelected)
    console.log(AIAttackSelected)
    if ((playerAttackSelected==="Water" && AIAttackSelected==="Fire")||(playerAttackSelected==="Earth" && AIAttackSelected==="Water")||(playerAttackSelected==="Fire" && AIAttackSelected==="Earth")){
        AIVitalPoints--
        resultMessage.innerHTML=resultMessages.won
    }
    else if(playerAttackSelected===AIAttackSelected){
        resultMessage.innerHTML=resultMessages.draw
    }
    else{
        playerVitalPoints--
        resultMessage.innerHTML=resultMessages.lose
    }
    if ((playerVitalPoints===0)||(AIVitalPoints===0)) {
        attackSelectionSection.classList.add("inactive")
        restartSection.classList.remove("inactive")
        document.querySelectorAll(".Attack-selection__btn").forEach(element => {
            document.querySelector(".Attack-selection__container").removeChild(element)
        })
    }
    matchMessageSection.classList.remove("inactive")
    playerAttack.innerHTML=playerAttackSelected
    botAttack.innerHTML=AIAttackSelected
    playerStats.innerHTML=playerVitalPoints
    botStats.innerHTML=AIVitalPoints
}
// Restart Waiting (5).
function restartGame() {
    document.querySelectorAll(".mokepon").forEach(element => {
        document.querySelector(".Mokepon-selection__container").removeChild(element)
    })
    initialCoinditions()
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
// Restart Game
restartBtn.addEventListener("click",restartGame)
//
// Event listeners ---->



// Code Flow ----|

// Code Flow ---->



