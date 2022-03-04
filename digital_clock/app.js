window.addEventListener('load', () => {
    setInterval(() => {    
        let currentDate = new Date();
    
        let showHour = document.querySelector("#hours");
        let showMinute = document.querySelector("#minutes");
        let showSecond = document.querySelector("#seconds");
        let ampm = document.querySelector("#am_pm");
    
        let hours = currentDate.getHours() ;
        let minutes = currentDate.getMinutes() ;
        let seconds = currentDate.getSeconds();
        
        showHour.innerText = hours 
        showMinute.innerText = minutes
        showSecond.innerText = seconds
        if (Number(hours) >= 12) {
            ampm.innerText ="PM"
        }else{
            ampm.innerText ="AM" 
        }
    }, 1000)
  });
