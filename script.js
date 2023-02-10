function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choice = [];
    choice.push("Rock", "Paper", "Scissors");
    return choice[randomIndex(3)]
}

console.log(getComputerChoice())