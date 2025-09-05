

let userScore=0;
let ComputerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const ComputerScorePara =document.querySelector("#Computer-score");

const genComputerchoice  = () => {
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
//rock,paper,scissors
};

const drawGame= () => {
    console.log("game was draw");
    msg.innerText="Game was draw! Play again!";
     msg.style.backgroundColor="#081b31";
};

const showWinner= (userWin,userChoice,Computerchoice) => {
    if (userWin) {
        // console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${Computerchoice}`;
        msg.style.backgroundColor="green";
    } else {
        // console.log("you lose!");
        ComputerScore++;
        ComputerScorePara.innerText=ComputerScore;
        msg.innerText= `You lost  ${Computerchoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red";
    }
};

const playGame= (userChoice) => {
    //  console.log("userchoice = ",userChoice);
     //Generate Computer Choice-->modular way of programming by suing functions it can be reusable again and again with already wriiten code in specific functions//
     const Computerchoice=genComputerchoice();
    //   console.log("Computerchoice = ",Computerchoice);

      if(userChoice===Computerchoice) {
        drawGame();
        //Draw game
      }

       else {
        let userWin=true;

        if (userChoice==="rock") {
            //scissors,paper
            userWin = Computerchoice === "paper" ? false:true;
           } 
             else if(userChoice="paper") {
            //rock , scissors
            userWin= Computerchoice=== "scissors" ? false:true;
        }
         else {
              //rock,paper 
              userWin=compChoice==="rock" ? false:true;
            }
        showWinner(userWin,userChoice,Computerchoice);
      }
};

choices.forEach( (choice) => {
    // console.log (choice);
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
}); 