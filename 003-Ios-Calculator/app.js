let number=document.querySelectorAll(".number")
let yellow=document.querySelectorAll(".yellow")
let result=document.getElementById("result")
let reset=document.getElementById("reset")
let zero=document.getElementById("zero")
let list1=""
let divide= document.getElementById("divide")
let mult= document.getElementById("mult")
let minus= document.getElementById("minus")
let plus= document.getElementById("plus")
let equal= document.getElementById("equal")
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", ()=>{ 
          result.innerText+=number[i].innerText
          list1=result.innerText
        }
    )
}
for (let i = 0; i < yellow.length; i++) {
yellow[i].addEventListener("click", ()=>{ 
  result.innerText+= yellow[i].innerText
  list1=result.innerText
  }
  )
}
equal.addEventListener("click", ()=>{ 
for (let i = 0; i < list1.length; i++) {
    if (list1.includes("+")) {
        let x=list1.indexOf("+")
        let y= Number(list1.slice(0,x))
        let z= Number(list1.slice(x+1))
        result.innerText=y+z  
    } else if (list1.includes("-")) {
        let x=list1.indexOf("-")
        let y= Number(list1.slice(0,x))
        let z= Number(list1.slice(x+1))
        result.innerText=y-z  
    } else if (list1.includes("x")) {
        let x=list1.indexOf("x")
        let y= Number(list1.slice(0,x))
        let z= Number(list1.slice(x+1))
        result.innerText=y*z  
    } else if (list1.includes("÷")) {
        let x=list1.indexOf("÷")
        let y= Number(list1.slice(0,x))
        let z= Number(list1.slice(x+1))
        result.innerText=y/z  
    }
}
  }
  )
reset.addEventListener("click", ()=>{ 
list1=""
result.innerText=""
})


/* 
let tuncay = "3.5"
let ali= Number(tuncay)*2
console.log(ali); */
