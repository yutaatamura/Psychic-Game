   var userScore = 0; 
   var computerScore = 0;
   var lettersGuessed = [];
    
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var computerOutput = letters[Math.floor(Math.random() * letters.length)];
    //console.log(computerOutput);

   function reset() {

   }

document.onkeyup = function(event) {

    var userInputLetter = String.fromCharCode(event.which).toLowerCase();
    lettersGuessed.push(userInputLetter);
    document.getElementById("guessedLetters").innerHTML = "Your guesses so far: " + lettersGuessed.join(', ');


    if (userInputLetter === computerOutput) {
        alert("You guessed it!");
        userScore++;
        document.getElementById("userScore").innerHTML = userScore;
        
    } else {
        alert("BITCH, you STUPID. Try again.... smh.");
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        
        //alert("WRONG! Try again!");
    }
        
    
};







