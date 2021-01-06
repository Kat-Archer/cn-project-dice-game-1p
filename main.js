//to-do: fix try again button to center, do media

let score = document.getElementById("score");
let outcome = document.getElementById("outcome");
let dice = document.getElementById("dice");
let restart = document.getElementById("restart");
let roll = document.getElementById("roll");
let tally = document.getElementById("tally");
let fastest = document.getElementById("fastest");


let scoreOutput = 0;
let diceOutput = 0;
let tallyOutput = 0;
let fastestOutput = 0;


restart.style.display = "none";


roll.addEventListener("click", ()=> {
    //randomise number, show dice image, update score, check for win/lose & restart if true
    diceOutput = Math.ceil(Math.random() * 6)
    console.log(diceOutput);
    dice.style.display = "block";
    tallyOutput++;
    tally.textContent = `Rolls: ${tallyOutput}`;
    


    switch (diceOutput) {
        case 1:
            dice.src="./img/dice1.png";
            break;
        case 2:
            dice.src="./img/dice2.png";
            break;
        case 3:
            dice.src="./img/dice3.png";
            break;
        case 4:
            dice.src="./img/dice4.png";
            break;
        case 5:
            dice.src="./img/dice5.png";
            break;
        case 6:
            dice.src="./img/dice6.png";
            break;
    };

    if (diceOutput === 1 && scoreOutput < 20) {
        outcome.style.display = "block";
        outcome.style.color = "red";
        outcome.textContent = "YOU LOSE!"
        restart.style.display = "block";
        roll.style.display = "none";
    } else {
        scoreOutput += diceOutput;
        console.log(scoreOutput);
        score.textContent = `Score: ${scoreOutput}/21`;
        if (scoreOutput > 20) {
            outcome.style.display = "block";
            outcome.style.color = "green";
            outcome.textContent = "WINNER!";
            restart.style.display = "block";
            roll.style.display = "none";
            if (tallyOutput < fastestOutput || fastestOutput === 0) {
                fastestOutput = tallyOutput;
                fastest.textContent = `Fastest Win: ${fastestOutput}`;
            }
        }
    };
});

restart.addEventListener("click", ()=> {
    scoreOutput = 0;
    diceOutput = 0;
    dice.style.display = "none";
    restart.style.display = "none";
    outcome.style.display = "none";
    roll.style.display = "block";
    score.textContent = `Score: 0/21`;
    tallyOutput = 0;
    tally.textContent = `Rolls: ${tallyOutput}`;
})
