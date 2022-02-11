let bebek2=document.getElementById("bebek2");
let resim=document.getElementById("resim");
let h1=document.getElementById("h1");
let bebek3=bebek2.value.toUpperCase()

bebek2.addEventListener("change", () => {

    if (bebek2.value=="Farah"){
        alert("Doğru dünyanın en güzel bebeği Farah, şimdi ona bi bak");
        resim.style.display="block"
        h1.innerText="İşte dünyanın en güzel bebeği"
        bebek2.style.display="none"
    }else{
        alert("Maalesef, bir daha dene :D")
        bebek2.value=""
    }
})
