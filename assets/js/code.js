let pic1 = document.getElementById("pic1")
let pic2 = document.getElementById("pic2")
let pic3 = document.getElementById("pic3")
let pic4 = document.getElementById("pic4")
let pic5 = document.getElementById("pic5")
let pic6 = document.getElementById("pic6")
let pic7 = document.getElementById("pic7")

window.onmousemove = (e)=>{
    let x = e.clientX
    let y = e.clientY

    pic1.style.right = (x/20)-20+"px"
    pic1.style.bottom = (y/20)-80+"px"
}