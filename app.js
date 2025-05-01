//Generate a random number between 1 to 100
let randomNumber=Math.floor(Math.random()*100)+1;
document.write(randomNumber)
//Get reference to elements.
const guessInput=document.getElementById("guessInput");
const checkButton=document.getElementById("checkButton");
const result=document.getElementById("result");
const restartButton=document.getElementById("restartButton");

//function to handle user guesses.
checkButton.onclick =()=>{
const guess=Number(guessInput.value)
if(guess<1 || guess>100){
    result.textContent="Enter a number between 1 to 100";
    result.style.color="red";
}
else if(guess===randomNumber){
        result.textContent="🎉 Correct! you guessed it!";
        result.style.color="green";
        checkButton.disabled=true;
        restartButton.style.display="block";
}
else{
    result.textContent=guess < randomNumber?"Too Low ! Try Again." : "Too high! Try Again. !";
    result.style.color="purple";

}
  guessInput.value="";  //clear input
  guessInput.focus();
}
restartButton.onclick = ()=> {
    randomNumber=Math.floor(Math.random()*100)+1;
    result.textContent="";
    checkButton.disabled=false;
    restartButton.style.display="none";
    guessInput.focus();
}





