const choices = document.querySelectorAll(".choice");
let result = document.querySelector("#result");

let yourscore = document.querySelector("#yourscore");
let compscore = document.querySelector("#compscore");

// store scores as numbers
let your = Number(yourscore.innerText);
let computer = Number(compscore.innerText);

function compchoice() {
    let compchoices = ["Rock", "Paper", "Scissor"];
    const randId = Math.floor(Math.random() * 3);
    return compchoices[randId];
}

const draw = () => {
    result.innerText = "Draw! Play Again";
    result.style.backgroundColor = "gray";
};

const showwinner = (userwin, userchoice, getcomp) => {
    if (userwin) {
        your++;
        yourscore.innerText = your;
        result.innerText = `You Win! Your ${userchoice} beats ${getcomp}`;
        result.style.backgroundColor = "green";
    } else {
        computer++;
        compscore.innerText = computer;
        result.innerText = `You Lost! ${getcomp} beats your ${userchoice}`;
        result.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const getcomp = compchoice();

    if (userchoice === getcomp) {
        draw();
        return;
    }

    let userwin;

    if (userchoice === "Rock") {
        userwin = getcomp === "Scissor";
    } else if (userchoice === "Scissor") {
        userwin = getcomp === "Paper";
    } else {
        userwin = getcomp === "Rock";
    }

    showwinner(userwin, userchoice, getcomp);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playgame(choiceId);
    });
});
