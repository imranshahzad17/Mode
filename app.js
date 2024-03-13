let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");
let light = false;
toggle.addEventListener("click",function(){
    light = !light;
    if (!light) {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "black";
    }
});