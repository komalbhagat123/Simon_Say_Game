let btnns = ["red","purple","green","yellow"];

let started = false;
let level = 0;

let head = document.querySelector('h3');

document.addEventListener('keypress',function(){
  if(started == false){
    started = true;
    levelUp();
  }
})

function levelUp(){
  level++;
  head.innerText = `Level ${level}`;

  let randomInx = Math.round(Math.random()*3);
  let randonColor = btnns[randomInx];

  let randombtn = document.querySelector(`.${randonColor}`);
  gameFlash(randombtn);
}

function gameFlash(btn){
  btn.classList.add("gameflash");
  setTimeout(function(){
    btn.classList.remove("gameflash");
  },500);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },500);
}

function btnPresed(){
  let btn = this;
  userFlash(btn);
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns){
  btn.addEventListener('click',btnPresed);
}