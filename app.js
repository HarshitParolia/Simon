let gameSeq=[];
let userSeq=[];

let btns=["pink","skyblue","gold","orchid"]

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started==false) {
        console.log("Game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn) {
 btn.classList.add("flash");
 setTimeout(function() {
    btn.classList.remove("flash");
 } ,250); 
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
       btn.classList.remove("userFlash");
    } ,250); 
   }

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   // console.log(randIdx);
    //console.log(randBtn);
    //console.log(randColor);
    //random btn choose
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx) {
    //console.log("current level:",level);
    // let idx=level-1;

    if(userSeq[idx]===gameSeq[idx]) {
        if(userSeq.length==gameSeq.length) {
           setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Press any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
          document.querySelector("body").style.backgroundColor="white";
  },150 );   
       reset(); 
}
    }


function btnPress() {
   // console.log(this);
    let btn=this;
   //s gameFlash(btn);
    userFlash(btn);
    userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click",btnPress);
}

 function reset() {
 started=false;
 gameSeq=[];
 userSeq=[];
 level=0;
}

