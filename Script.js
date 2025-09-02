const learnMore = document.getElementById("Learn")
const sales = document.getElementById("Salesbtn")
const support = document.getElementById("Supportbtn")
const pop = document.getElementById("PopUp")
if (learnMore){
 learnMore.addEventListener("click", () => {
    window.location.href = "About.html"
})    
}

sales.addEventListener("click", () => {
    document.getElementById("PopUp").style.display = "flex";
})

support.addEventListener("click", () =>{
    document.getElementById("PopUp").style.display = "flex";
})