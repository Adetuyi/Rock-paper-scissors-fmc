//Declaration of variables
const moves = ['<div class="paper"><div><img src="images/icon-paper.svg" alt="paper"></div></div>',
                '<div class="scissors"><div><img src="images/icon-scissors.svg" alt="scissors"></div></div>', 
                '<div class="rock"><div><img src="images/icon-rock.svg" alt="rock"></div></div>'];

const paper = moves[0];
const scissors = moves[1];
const rock = moves[2];

const user = document.getElementById('user');
const computer = document.getElementById('computer');
const status = document.getElementById('status');
var state = "you lose";
const score = document.getElementById('score');
var counter = parseInt(score.textContent);
const rulesSection = document.getElementById("rules-section");
const rules = document.getElementById("rules-btn");
const close = document.getElementById("close");
const game = document.getElementById('game');
const playBox = document.getElementById('play');
const again = document.getElementById('again');




function play(x){
    const playerMove = moves[x];
    user.innerHTML = playerMove;
    
    const y = Math.floor(Math.random() * 3);
    const computerMove = moves[y];
    computer.innerHTML = computerMove;


    if((playerMove == paper && computerMove == rock) || (playerMove == rock && computerMove == scissors) || (playerMove == scissors && computerMove == paper)){
        state = "you win";
        status.innerHTML = state;
    }else if((playerMove == paper && computerMove == paper) || (playerMove == rock && computerMove == rock) || (playerMove == scissors && computerMove == scissors)){
        state = "draw";
        status.innerHTML = state;
    }else{
        state = "you lose";
        status.innerHTML = state;
    }
    switch(state){
        case "you win": 
            counter++;
            break;
        case "you lose": 
            counter--;
            break;
    }
    if(counter < 0){counter = 0};
    score.innerHTML = counter;


    game.classList.toggle("hide");
    playBox.classList.toggle("hide");
    

}

rules.addEventListener("click", ()=>{
    rulesSection.classList.toggle("hide");
});

close.addEventListener("click", ()=>{
    rulesSection.classList.toggle("hide");
});

again.addEventListener("click", ()=>{
    game.classList.toggle("hide");
    playBox.classList.toggle("hide");
});
