let player1=document.getElementById("player1")
let number1=document.getElementById("number1")
let player2=document.getElementById("player2")
let number2=document.getElementById("number2")
let win1=document.getElementById("win1")
let reset=document.getElementById("reset")

player1.addEventListener("click", ()=>{
number1.innerText=Number(number1.innerText)+1
if(win1.value==number1.innerText){
    alert("Tuncay wins")
    number1.style.color="green"
    number2.style.color="red"
    player1.style.display="none"
    player2.style.display="none"
}

}
)

player2.addEventListener("click", ()=>{
    number2.innerText=Number(number2.innerText)+1
    if(win1.value==number2.innerText){
        alert(" принцесса Anna wins")
        number2.style.color="green";
        number1.style.color="red";
        player1.style.display="none"
        player2.style.display="none"
    }
}
)

reset.addEventListener("click", ()=>{
    number2.innerText=Number(number2.innerText)+1
        number1.innerText=0
        number2.innerText=0
        number1.style.color="black"
        number2.style.color="black"
        player1.style.display="block"
        player2.style.display="block"
    }
)

