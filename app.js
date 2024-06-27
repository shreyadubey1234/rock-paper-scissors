let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");


const genCompChoice = ()=>{
    const options =["rock","paper","scissors"];
   const randIdx =  Math.floor(Math.random()*3);
   return options[randIdx];
//rock paper scissors
};

const drawGame= ()=>{
    msg.innerText="Game was Draw. Play Again"
    msg.style.backgroundColor ="#E90074";
}

const showWinner = (userWin ,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       msg.innerText =`You Win! Your ${userchoice} beats ${compchoice}`;
       msg.style.backgroundColor ="hsl(160, 100%, 46%)";
    }else{
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose. ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="hsla(0, 80%, 57%, 0.948)";
    }
}

const playGame =(userchoice)=>{
    
    const compchoice=genCompChoice();
    
    if(userchoice===compchoice){
         drawGame();
    }else{
        let userWin =true;
        if(userchoice==="rock"){
            //scissors,paper
           userWin = compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
           userWin = compchoice==="scissors"?false:true;
        } else{
            //rock,paper
           userWin = compchoice==="rock"?false:true;
        }
        showWinner(userWin ,userchoice,compchoice);
    }

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userchoice = choice.getAttribute("id");
     
     playGame(userchoice);

    });
});

