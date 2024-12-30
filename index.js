const option_values = {rock: 1, paper: 2, scissor: 3};
const option_values_reversed = {1: "Rock", 2: "Paper", 3:"Scissor"};

function getComputerChoice() {
    return (Math.floor(Math.random() * 3) + 1);
}

round = 1;
human_score = 0;
computer_score = 0;

function playRound(human_choice, computer_choice){

    console.log("Round: " + round);
    console.log("Human Score: " + human_score);
    console.log("Computer Score: " + computer_score);
    
    human_choice_converted = option_values[human_choice];
    console.log("Human choosed: " + option_values_reversed[human_choice_converted]);
    console.log("Computer choosed: " + option_values_reversed[computer_choice])

    if(human_choice_converted === computer_choice){
        console.log("Draw");
        console.log("No points were given");
    }
    else if(human_choice_converted === 1 && computer_choice === 3){
        console.log("Human wins!");
        console.log("Human got 1 point");
        human_score += 1;
    }
    else if(human_choice_converted === 3 && computer_choice === 1){
        console.log("Computer wins!");
        console.log("Computer got 1 point");
        computer_score += 1;
    }
    else{
        if(human_choice_converted > computer_choice){
            console.log("Human wins!");
            console.log("Human got 1 point");
            human_score += 1;
        }
        else{
            console.log("Computer wins!");
            console.log("Computer got 1 point");
            computer_score += 1;
        }
    }
}

function playGame(human_selection){
    if(round <= 5){
        if(round < 5){
            let computer_selection = getComputerChoice();
            playRound(human_selection, computer_selection);     
            round += 1;
        }
        else if(round === 5){
            let computer_selection = getComputerChoice();
            playRound(human_selection, computer_selection);
            round += 1;     
            result();
            console.log("***GAME OVER***");
            console.log("Please refresh the page to restart");
        };
    }
    
}

function result(){

    console.log("Human final score: " + human_score);
    console.log("Computer final score: " + computer_score);

    if(human_score === computer_score){
        console.log("The game ends in a draw!");
    }
    else if (human_score > computer_score){
        console.log("Human wins the game with " + human_score + " points!")
    }
    else{
        console.log("Computer wins the game with " + computer_score + " points!")
    }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const choice = button.id;
            playGame(choice);                
        });
});