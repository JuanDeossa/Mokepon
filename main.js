// Golbar Var ----|
let mokeponSelected;
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
// Document Element Assignments ---->


// Function Definitions ----|
//Initial Conditions (1).
function initialCoinditions() {
    stats.classList.add("inactive");
    attackSelection.classList.add("inactive");
    attackMessage.classList.add("inactive");
    restart.classList.add("inactive");
}
//Select Mokepon (2).
function selectMokepon() {
    if (Hipodoge.checked) {
        mokeponSelected = Hipodoge.id
        selectAttack()
    }else if (Capipepo.checked) {
        mokeponSelected = Capipepo.id
        selectAttack()
    }else if (Ratigueya.checked) {
        mokeponSelected = Ratigueya.id
        selectAttack()
    }else {
        alert("Choose a Mokepon");
    }
    console.log(mokeponSelected);
}
// Select Attack (3).
function selectAttack() {
    mokeponSelection.classList.add("inactive")
    stats.classList.remove("inactive");
    attackSelection.classList.remove("inactive");
}
// Function Definitions ---->


// Event listeners ----|
// Initial Loadpage
window.addEventListener("load",initialCoinditions)
// 
// Mokepon Selection Button 
mokeponSubmitBtn.addEventListener("click",selectMokepon)
// 
// Event listeners ---->



// Code Flow ----|

// Code Flow ---->