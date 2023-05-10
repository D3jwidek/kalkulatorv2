'use strict'
const btn = document.querySelector("button")
const don =()=>{
    const div = document.querySelector("#result")
    let text=document.querySelector("#data").value
    div.innerText=`Witaj ${text}`
}
btn.addEventListener('click',don)


const form=document.querySelector("form")
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const res2=document.querySelector("#result2")
    let n1= +document.querySelectorAll("input")[1].value
    let n2= +document.querySelectorAll("input")[2].value

    res2.innerText = n1 + n2
   
})