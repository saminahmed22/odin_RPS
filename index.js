const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const choice = button.id;
            playGame(choice);                
        });
});

const div = document.querySelector("div");

const option_values = {rock: 1, paper: 2, scissor: 3};
const option_values_reversed = {1: "Rock", 2: "Paper", 3:"Scissor"};

function getComputerChoice() {
    return (Math.floor(Math.random() * 3) + 1);
}

round = 1;
human_score = 0;
computer_score = 0;

function playRound(human_choice, computer_choice){

    div.innerHTML += "Round: " + round + "<br>";
    div.innerHTML += "Human Score: " + human_score + "<br>";
    div.innerHTML += "Computer Score: " + computer_score + "<br>";
    
    human_choice_converted = option_values[human_choice];

    div.innerHTML += "Human choosed: " + option_values_reversed[human_choice_converted] + "<br>";
    div.innerHTML += "Computer choosed: " + option_values_reversed[computer_choice] + "<br>";

    if(human_choice_converted === computer_choice){
        div.innerHTML += "Draw" + "<br>";
        div.innerHTML += "No points were given" + "<br>";
    }
    else if(human_choice_converted === 1 && computer_choice === 3){
        div.innerHTML += "Human wins!" + "<br>";
        div.innerHTML += "Human got 1 point" + "<br>";
        human_score += 1;
    }
    else if(human_choice_converted === 3 && computer_choice === 1){
        div.innerHTML += "Computer wins!" + "<br>";
        div.innerHTML += "Computer got 1 point" + "<br>";
        computer_score += 1;
    }
    else{
        if(human_choice_converted > computer_choice){
            div.innerHTML += "Human wins!" + "<br>";
            div.innerHTML += "Human got 1 point" + "<br>";
            human_score += 1;
        }
        else{
            div.innerHTML += "Computer wins!" + "<br>";
            div.innerHTML += "Computer got 1 point" + "<br>";
            computer_score += 1;
        }
    }
}

function playGame(human_selection){
    if(human_score === 5 || computer_score === 5){
        div.innerHTML += "<br>";
        div.innerHTML += "<br>";  
        result();
        return;
    }
    else{
        div.innerHTML = "";
        let computer_selection = getComputerChoice();
        playRound(human_selection, computer_selection);     
        round += 1;
    };   
};

function result(){

    div.innerHTML += "Human final score: " + human_score + "<br>";
    div.innerHTML += "Computer final score: " + computer_score + "<br>";

    if(human_score === computer_score){
        div.innerHTML += "The game ends in a draw!" + "<br>";
    }
    else if (human_score > computer_score){
        div.innerHTML += "Human wins the game with " + human_score + " points!" + "<br>";
    }
    else{
        div.innerHTML += "Computer wins the game with " + computer_score + " points!" + "<br>";
    }
    div.innerHTML += "***GAME OVER***" + "<br>";
    div.innerHTML += "Please refresh the page to restart" + "<br>";
};

