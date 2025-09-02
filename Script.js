const learnMore = document.getElementById("Learn")
const  = document.getElementById("Sales")
const support = document.getElementById("Support")
const pop = document.getElementById("PopUp")

learnMore.addEventListener("click", () => {
    window.location.href = "About.html"
}) 

sales.addEventListener("click", () => {
    document.getElementById("PopUp").style.display = "flex";
})

support.addEventListener("click", () =>{
    document.getElementById("PopUp").style.display = "flex";
})