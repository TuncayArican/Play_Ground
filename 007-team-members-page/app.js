





















































const switchButton = document.getElementById("flexSwitchCheckDefault");
const container = document.getElementById("members-page");
console.log(switchButton);
console.log(container);

switchButton.addEventListener("click", (e) => {
    if(e.target.checked){
        container.style.backgroundColor  = 'black' ;
        container.parentElement.style.backgroundColor  = 'black' ;
        container.style.color = 'white'
    }
    else{
        container.style.backgroundColor  = '#f4f4f4' ;
        container.parentElement.style.backgroundColor  = 'white' ;
        container.style.color = 'black'

    }
})