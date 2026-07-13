let gameSeq=[];
let userSeq=[];
let btns =["yellow", "red", "purple", "green"];

let highest=0;

let level=0;
let started=false;

h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started== false){
        started= true;
        console.log("Game started");

        levelUp();
    }
});

function gameFlash(btn){
     btn.classList.add("flash");

     setTimeout(() => {
        btn.classList.remove("flash");
     }, 250);
}

function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(() => {
    btn.classList.remove("userFlash");
}, 250);
}

function levelUp(){
    userSeq=[];
    level++;

    h2.innerText= `Level ${level}/Heighest: ${highest}`;

    // random btn choose
    let ranIdx= Math.floor(Math.random()*4);
    let ranColor = btns[ranIdx];
    let ranBtn= document.querySelector(`.${ranColor}`);

    // console.log(ranIdx);
    // console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx){
   

    if(userSeq[idx]== gameSeq[idx]){
        if(userSeq.length == gameSeq.length) 
          setTimeout(levelUp, 1000);
        console.log("Sequence mathched");
    } else {
        if(level>highest) highest= level;

         h2.innerHTML= `Game over! Your score was<b> ${level}/ ${highest}</b>. <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor= "red";

         setTimeout(() => {
             document.querySelector("body").style.backgroundColor= "white";
         }, 150);
         reset();
    }
    console.log("current leve: "+ level);
}


function btnPressed(){
  let btn  = this;
  console.log(btn);
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  console.log(userColor);

  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}

function reset(){
    gameSeq=[];
    level=0;
    started=false;
    userSeq=[];
}