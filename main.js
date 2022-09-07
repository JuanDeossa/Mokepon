// Global Var ----|
class Mokepon{
    constructor(name,lifes,attacks,image){
        this.name=name,
        this.lifes=lifes,
        this.attacks=attacks,
        this.image=image
    }
}
const HypoDoggo = new Mokepon("HypoDoggo",5,[],"https://i.postimg.cc/v4hyPMsB/Hypo-Doggo.png")
const GreeMster = new Mokepon("GreeMster",5,[],"https://i.postimg.cc/SXKh35SG/Gree-Mster.png")
const FyreRatt = new Mokepon("FyreRatt",5,[],"https://i.postimg.cc/d7SYYBDc/FyreRatt.png")
const resultMessages = {
    won: "You Won",
    lose: "You Lose",
    draw: "Draw",
    Winner: "",
    Unselected: "Please, select a Mokepon"
}
//
let mokeponDB=[]
let mokeponPlayerSelected;
let playerVitalPoints = 2
let mokeponAISelected;
let AIVitalPoints = 2
let playerAttackSelected
let AIAttackSelected
let Attacks = ["Fire","Water","Earth"]
let Mokepones = ["Hipodoge","Capipepo","Ratigueya"]
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
const fireAttack = document.querySelector(".Attack-selection_Fire")
const waterAttack = document.querySelector(".Attack-selection_Water")
const earthAttack = document.querySelector(".Attack-selection_Earth")
const playerAttack = document.querySelector(".Match-message__player")
const botAttack = document.querySelector(".Match-message__bot")
//Message
const playerName = document.querySelectorAll(".Player-Name")
const botName = document.querySelectorAll(".Bot-Name")
const resultMessage = document.querySelector(".Match-message__Result")
// Document Element Assignments ---->


// Function Definitions ----|
// Render Mokepons (0).
function renderMokepons(array) {
    array.forEach(MokeponOBJ => {
    mokeponContainer.innerHTML+=`
    <div>
        <label for=${MokeponOBJ.name}>${MokeponOBJ.name}</label>
        <input id=${MokeponOBJ.name} type="radio" name="Mokepon">
    </div>`
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
            selectAttack()
        }
    })
    if (mokeponPlayerSelected===undefined) {
        alert(resultMessages.Unselected)
    }
}
// Select Attack (3).
function selectAttack() {
    for (const iterator of playerName) {
        iterator.innerHTML=mokeponPlayerSelected
    }
    playerStats.innerHTML=playerVitalPoints
    botStats.innerHTML=AIVitalPoints   
    const botName$=randomItem(Mokepones)
    for (const iterator of botName) {
        iterator.innerHTML=botName$
    }
    mokeponSelectionSection.classList.add("inactive")// ---> Reset
    statsSection.classList.remove("inactive");// ---> Reset
    attackSelectionSection.classList.remove("inactive");// ---> Reset
}
// Match Result (4).
function matchResult() {        
    let playerAttackSelected = this.name
    let AIAttackSelected = randomItem(Attacks)
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
    }
    matchMessageSection.classList.remove("inactive")
    playerAttack.innerHTML=playerAttackSelected
    botAttack.innerHTML=AIAttackSelected
    playerStats.innerHTML=playerVitalPoints
    botStats.innerHTML=AIVitalPoints
}
// Restart Waiting (5).
function restartGame() {
    playerVitalPoints = 2
    AIVitalPoints = 2
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
// Attack Buttons 
fireAttack.addEventListener("click",matchResult)
waterAttack.addEventListener("click",matchResult)
earthAttack.addEventListener("click",matchResult)
//
// Restart Game
restartSection.addEventListener("click",restartGame) 
//
// Event listeners ---->



// Code Flow ----|
mokeponDB.push(HypoDoggo,GreeMster,FyreRatt)
HypoDoggo.attacks.push(
    {type:"Water 💧", id: "Water-Btn"},
    {type:"Water 💧", id: "Water-Btn"},
    {type:"Water 💧", id: "Water-Btn"},
    {type:"Earth 🎍", id: "Earth-Btn"},
    {type:"Fire  🔥", id: "Fire-Btn"},
)
GreeMster.attacks.push(
    {type:"Earth 🎍", id: "Earth-Btn"},
    {type:"Earth 🎍", id: "Earth-Btn"},
    {type:"Earth 🎍", id: "Earth-Btn"},
    {type:"Fire  🔥", id: "Fire-Btn"},
    {type:"Water 💧", id: "Water-Btn"},
)
FyreRatt.attacks.push(
    {type:"Fire  🔥", id: "Fire-Btn"},
    {type:"Fire  🔥", id: "Fire-Btn"},
    {type:"Fire  🔥", id: "Fire-Btn"},
    {type:"Water 💧", id: "Water-Btn"},
    {type:"Earth 🎍", id: "Earth-Btn"},
)

// Code Flow ---->


