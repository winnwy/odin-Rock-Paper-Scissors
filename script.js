function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choice = [];
    choice.push("Rock", "Paper", "Scissors");
    return choice[randomIndex(3)];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    let result = "Win";
    switch (ps) {
        case "rock":
            if (cs === "paper")
                result = "Lose";
            else if (cs === "rock")
                result = "Tie";
            break;
        case "paper":
            if (cs === "scissors")
                result = "Lose";
            else if (cs === "paper")
                result = "Tie";
            break;
        case "scissors":
            if (cs === "rock")
                result = "Lose";
            else if (cs === "scissors")
                result = "Tie";
            break;
        default:
            break;
    }
    let outputCS = cs[0].toUpperCase() + cs.slice(1)
    let outputPS = ps[0].toUpperCase() + ps.slice(1)
    if (result === "Tie")
        return result;
    else if (result === "Lose")
        return `You Lose! ${outputCS} beats ${outputPS}`
    else 
        return `You Win! ${outputPS} beats ${outputCS}`
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));