// Mode

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

// =========================================================================================

//Counter

let count = 0;
let count2 = document.querySelector("#count");
let Sum = document.querySelector(".ADD");
let Sub = document.querySelector(".SUB");

Sum.addEventListener("click",function(){
    count++;
   count2.innerHTML = count;
})
Sub.addEventListener("click",function(){
    count--;
   count2.innerHTML = count;
})