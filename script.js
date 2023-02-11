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
    console.log(printHelper(ps, cs, result));
    return result;  
}

function printHelper(ps, cs, result) {
    let outputCS = cs[0].toUpperCase() + cs.slice(1);
    let outputPS = ps[0].toUpperCase() + ps.slice(1);
    if (result === "Tie")
        return result;
    else if (result === "Lose")
        return `You Lose! ${outputCS} beats ${outputPS}`
    else 
        return `You Win! ${outputPS} beats ${outputCS}`
}

function game(playerSelection, computerSelection) {
    let score = 0;
    let winner = "You Win";
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input rock, paper or scissors: ", "rock");
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection)
        switch (result) {
            case "Win": 
                score += 1;
                break;
            case "Lose":
                score -= 1;
                break;
        }
        console.log(`Round ${i+1}: Score: ${score}`);
    }
    if (score < 0) {
        winner = "Computer Wins";
    }
    else if (score === 0) {
        winner = "Win Win";
    }
    console.log(winner);
}
game();