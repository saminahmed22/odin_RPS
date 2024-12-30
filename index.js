
/*
1 = Rock
2 = paper
3 = scissor
*/

function getComputerChoice(){
    let computer_choice = null;

    let random_number =  Math.floor((Math.random() * 3) + 1);
    if (random_number === 1){
        computer_choice = "rock";
    }
    else if (random_number === 2){
        computer_choice = "paper";
    }
    else{
        computer_choice = "scissor";
    }
    return computer_choice;
}

function getHumanChoice(){
    while (true){

        let human_choice = prompt("Enter Your choice between Rock, Paper and Scissor: ").toLowerCase();

        if (human_choice === "rock" || human_choice === "paper" || human_choice === "scissor"){
            return human_choice;
        }
        else{
            alert("Invalid input, please enter your choice between Rock, Paper and Scissor");
        }
    }
}

function playRound(human_choice, computer_choice){

    if (human_choice === "rock" && computer_choice === "paper") {
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("Computer wins this round!");
        computer_score += 1;
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    } 
    else if (human_choice === "rock" && computer_choice === "scissor") {
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("Human wins this round!");
        human_score += 1;
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    }
    else if (human_choice === "paper" && computer_choice === "rock") {
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("Human wins this round!");
        human_score += 1;
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    }
    else if (human_choice === "paper" && computer_choice === "scissor") {
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("Computer wins this round!");
        computer_score += 1;
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    }
    else if (human_choice === "scissor" && computer_choice === "rock") {
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("Computer wins this round!");
        computer_score += 1;
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    }
    else if (human_choice === "scissor" && computer_choice === "paper") {
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("Human wins this round!");
        human_score += 1;
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    }
    else {
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("It's a draw! No points awarded.");
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    }
}


function playGame(){
    human_score = 0;
    computer_score = 0;
    round = 0;
    for(i = 1; i <= 5; i++){
        let human_selection = getHumanChoice();
        let computer_selection = getComputerChoice();
        round += 1;
        console.log("Round: " + round)
        playRound(human_selection, computer_selection);
    }
    if(human_score === computer_score){
        console.log("The game ends in a draw!")
    }
    else if (human_score > computer_score){
        console.log("Human wins the game with " + human_score + " points!")
    }
    else{
        console.log("Computer wins the game with " + computer_score + " points!")
    }
}