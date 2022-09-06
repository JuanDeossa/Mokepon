// Golbar Var ----|

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
// Document Element Assignments ---->


// Event listeners ----|
// Initial Loadpage
window.addEventListener("load",initialCoinditions)
// Event listeners ---->


// Function Definitions ----|
function initialCoinditions() {
    stats.classList.add("inactive");
    attackSelection.classList.add("inactive");
    attackMessage.classList.add("inactive");
    restart.classList.add("inactive");
}
// Function Definitions ---->

