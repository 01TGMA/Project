const learnMore = document.getElementById("Learn")
const sales = document.getElementById("Salesbtn")
const support = document.getElementById("Supportbtn")
const pop = document.getElementById("PopUp")
const close = document.getElementById("Close")
const lM = document.getElementsByClassName("LM")

if (learnMore){
 learnMore.addEventListener("click", () => {
    window.location.href = "About.html"
})    
}
if(sales){
 sales.addEventListener("click", () => {
    document.getElementById("PopUp").style.display = "flex";
})   
}


if(support){
 support.addEventListener("click", () =>{
    document.getElementById("PopUp").style.display = "flex";
})   
}

if(close){
 close.addEventListener("click", () =>{
    document.getElementById("PopUp").style.display = "none";
})      
}

if (lM){
for(i = 0; i < lM.length; i++){
 lM[i].addEventListener("click", () => {
    window.location.href = "About.html"
})}}