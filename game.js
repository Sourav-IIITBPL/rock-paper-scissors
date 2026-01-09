const choices = document.querySelectorAll(".choice");
let score =  document.querySelectorAll(".score");
let result =   document.querySelector("#result");

let yourscore =   document.querySelector("#yourscore");
let compscore =   document.querySelector("#compscore");

// modular programming - generating functions for each task

let your = yourscore.innerText();
let computer = compscore.innerText();

function compchoice () {
    let rand = Math.random();  // generates random numbers b/w 0 to 9.99999
    let compchoices = ["Rock","Paper","Scissor"];
    const randId = Math.floor(rand*3);
    return compchoices[randId];
}

const draw = () => {
    console.log("draw");
    result.innerText =`Draw ! Play Again`;
}  

showwinner = (userwin,userchoice,getcomp) => {
    if(userwin){
     console.log("you win");
      result.innerText =`You Win! your ${userchoice} beats ${getcomp}`;
      result.style.backgroundColor = "green";
      your++;
    }
    else{
        console.log("you lost");
        result.innerText =`You Lost! comp's ${getcomp} beats your ${userchoice}`;
        result.style.backgroundColor = "red";
        computer++;
    }
}

const playgame = (userchoice) => {
    console.log("user choice",userchoice);
    const getcomp = compchoice();
    console.log("comp choice",getcomp);

    if(userchoice === getcomp)
         draw();

    else{
        let userwin = true;

        if(userchoice === "Rock" ){
           userwin = getcomp === "Scissor"? true : false;
        }

        else if(userchoice === "Scissor" ){
            userwin = getcomp === "Paper"? true : false;
        }

        else {
            userwin = getcomp === "Rock"? true : false;
        }
        
    }
    showwinner(userwin,userchoice,getcomp);
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const choiceId = choice.getAttribute("id");
        console.log('choice was clicked', choiceId);
        playgame(choiceId);
    })
})