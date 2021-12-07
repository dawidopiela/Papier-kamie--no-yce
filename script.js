let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("k");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("n");


function getComputerChoice() {
    const choices = ['k', 'n', 'p'];
    const randomNumer = (Math.floor(Math.random() *3));
    return choices[randomNumer];

}




function convertToWord(letter){
    if (letter === "k")  return "kamień "
    if (letter === "n")  return "nożyce  "
    if (letter === "p")  return "papier "
}



function win(userChoice, computerChoice){
 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;

 result_p.innerHTML = convertToWord(userChoice) + " wygrywa z " + nazwa(computerChoice) + " wygrałeś/aś ";

}

// if("pk")
// {
// console.log("komputer pokazał kamień")
// }
function nazwa(letter){
    if (letter === "k") return "kamieniem"
    if (letter === "p") return "papierem"
    if (letter === "n") return "nożycami"



}


function lose(userChoice, computerChoice){
   
        computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
       
        result_p.innerHTML = convertToWord(userChoice) + " przegrywa z " + nazwa(computerChoice) + " przegrałeś/aś ";
        
        
       
}

function draw(userChoice, computerChoice){
    
    userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = "remis";
}

function game(userChoice) {
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
    case "pk":
        case "kn":
        case "np":
            win(userChoice, computerChoice);
            break;
            case "kp":
                case "nk":
                case "pn":
                    lose(userChoice, computerChoice);
                    break;
                    case "kk":
                        case "nn":
                        case "pp":
                           draw(userChoice, computerChoice);
                            break;

}

}


function main(){
    rock_div.addEventListener('click', () =>{
    game("k")
    })

    paper_div.addEventListener('click', () =>{
        game("p")
    })

    scissors_div.addEventListener('click', () =>{
        game("n")
})
}
getComputerChoice();
main();
win();
nazwa();
