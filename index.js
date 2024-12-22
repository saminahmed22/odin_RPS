
/*
1 = Rock
2 = paper
3 = scissor
*/

function getComputerChoice(){

    const computer_choice = null;

    random_number =  Math.floor((Math.random() * 3) + 1);
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

        get_human_choice = prompt("Enter Your choice between Rock, Paper and Scissor: ");
        human_choice = get_human_choice.toLowerCase()

        if (human_choice === "rock" || human_choice === "paper" || human_choice === "scissor"){
            return human_choice;
        }
        else{
            alert("Invalid input, please enter a number between Rock, Paper and Scissor");
        }
    }
}

function playRound(human_choice, computer_choice){

    if (human_choice === computer_choice){
        console.log("Human Choice: " + human_choice);
        console.log("Computer Choice: " + computer_choice);
        console.log("Draw");
        console.log("Human Score: " + human_score);
        console.log("Computer Score: " + computer_score);
    }
    else if ((human_choice === 1 || human_choice === 3) && (computer_choice === 1 || computer_choice === 3)){
        if (human_choice < computer_choice){
            console.log("Human Choice: " + human_choice);
            console.log("Computer Choice: " + computer_choice);
            console.log("Human wins this round!");
            human_score += 1;
            console.log("Human Score: " + human_score);
            console.log("Computer Score: " + computer_score);
        }
        else{
            console.log("Human Choice: " + human_choice);
            console.log("Computer Choice: " + computer_choice);
            console.log("Computer wins this round!");
            computer_score += 1;
            console.log("Human Score: " + human_score);
            console.log("Computer Score: " + computer_score);
        }
    }
    else{
        if (human_choice > computer_choice){
            console.log("Human Choice: " + human_choice);
            console.log("Computer Choice: " + computer_choice);
            console.log("Human wins this round!");
            human_score += 1;
            console.log("Human Score: " + human_score);
            console.log("Computer Score: " + computer_score);
        }
        else{
            console.log("Human Choice: " + human_choice);
            console.log("Computer Choice: " + computer_choice);
            console.log("Computer wins this round!");
            computer_score += 1;
            console.log("Human Score: " + human_score);
            console.log("Computer Score: " + computer_score);
        }
    }
}


function playGame(){
    human_score = 0;
    computer_score = 0;
    for(i = 1; i <= 5; i++){
        const human_selection = getHumanChoice();
        const computer_selection = getComputerChoice();
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
playGame()