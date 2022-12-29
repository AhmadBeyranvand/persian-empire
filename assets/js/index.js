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
    pic1.style.right = (x/20) - 20 + "px"
    pic1.style.bottom = (y/20) - 80 + "px"
    
    pic2.style.right = (x/20) + 200 + "px"
    pic2.style.bottom = (y/20) - 40 + "px"
    
    pic3.style.right = (x/20) + 430 + "px"
    pic3.style.bottom = (y/20) + 120 + "px"

    pic4.style.right = (x/20) - 20 + "px"
    pic4.style.bottom = (y/20) + 250 + "px"

    pic5.style.right = (x/20) + 200 + "px"
    pic5.style.bottom = (y/20) + 300 + "px"

    pic6.style.right = (x/20) + 670 + "px"
    pic6.style.bottom = (y/20) - 10 + "px"

    pic7.style.right = (x/20) + 430 + "px"
    pic7.style.bottom = (y/20) - 230 + "px"

}