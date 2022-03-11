
const showHour = document.querySelector("#hours");
const showMinute = document.querySelector("#minutes");
const showSecond = document.querySelector("#seconds");
const miliseconds = document.querySelector("#miliseconds");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const secondpart = document.querySelector("#second_part");


play.addEventListener('click', () => {

    const stopWatch = setInterval(() => { 
        miliseconds.innerText = Number(miliseconds.innerText)+1
        if (Number(miliseconds.innerText) == 10) {
            showSecond.innerText = Number(showSecond.innerText)+1
            miliseconds.innerText="0"

            if (Number(showSecond.innerText) == 60) {
                showMinute.innerText = Number(showMinute.innerText)+1
                showSecond.innerText="00"

                if (Number(showMinute.innerText) == 60) {
                    showHour.innerText = Number(showHour.innerText)+1
                    showMinute.innerText="00"
                }

                else if (Number(showMinute.innerText) <  10) {
                    showMinute.innerText = "0" + String(showMinute.innerText);
                }
            }

            else if (Number(showSecond.innerText) <  10) {
                showSecond.innerText = "0" + String(showSecond.innerText);
            }

        }

        pause.addEventListener('click', () => {
            clearInterval(stopWatch)})
        }, 100);
})

stop.addEventListener('click', () => {
    miliseconds.innerText = "00";
    showSecond.innerText = "00";
    showMinute.innerText = "00";
})



/* secondpart.addEventListener("click",e=>{
    if(e.target.classList.contains("fa-play")){
        e.target.className="fa-solid fa-pause";
        const stopWatch = setInterval(() => { 
            miliseconds.innerText = Number(miliseconds.innerText)+1
            if (Number(miliseconds.innerText) == 10) {
                showSecond.innerText = Number(showSecond.innerText)+1
                miliseconds.innerText="0"
    
                if (Number(showSecond.innerText) == 60) {
                    showMinute.innerText = Number(showMinute.innerText)+1
                    showSecond.innerText="00"
    
                    if (Number(showMinute.innerText) == 60) {
                        showHour.innerText = Number(showHour.innerText)+1
                        showMinute.innerText="00"
                    }
    
                    else if (Number(showMinute.innerText) <  10) {
                        showMinute.innerText = "0" + String(showMinute.innerText);
                    }
                }
    
                else if (Number(showSecond.innerText) <  10) {
                    showSecond.innerText = "0" + String(showSecond.innerText);
                }
    
            }   
            }, 100); 
    }

    else if (e.target.classList.contains("fa-pause")){
        e.target.className="fa-solid fa-play";
        clearInterval(stopWatch)
    }

    else if (e.target.classList.contains("fa-stop")){
        miliseconds.innerText = "00";
        showSecond.innerText = "00";
        showMinute.innerText = "00";
    }
            
  
}) */

