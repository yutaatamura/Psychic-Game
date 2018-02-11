   var userWins = 0; 
   var userLosses = 0;
   var guesses = 9;
   var lettersGuessed = [];
   var computerOutput;
   var userInputLetterGlobal;
   var double = "false";
    
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    document.getElementById("guessesLeft").innerHTML = guesses;

    document.onload = generateRandomLetter();

    //generates random number from 0 to letters.length (26), and selects index in 'letters' array
    function generateRandomLetter () {

    computerOutput = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerOutput);
    };

    function update() {
        document.getElementById("userLosses").innerHTML = userLosses; 
        document.getElementById("userWins").innerHTML = userWins;
        document.getElementById("guessesLeft").innerHTML = guesses; 
        document.getElementById("guessedLetters").innerHTML = lettersGuessed;
    };

   function reset() {
       lettersGuessed = [];
       guesses = 9;
       update();
       generateRandomLetter();
   };

   function checkDouble() {
    for (var i = 0; i < lettersGuessed.length; i++) {
        for (var j = i + 1; j < lettersGuessed.length; j++) {
            console.log("J loop");    
            if (lettersGuessed[i] === lettersGuessed[j] && i != j) {
                lettersGuessed.splice(i, 1);
                alert("You have already guessed this letter, try again.");
                double === "true";
            }
        }; 
    };
};  

   function compare() {
        if (double === "true") {
            return;
        } else if 
    
        (userInputLetterGlobal === computerOutput) {
            alert("Correct! You guessed it right!");
            userWins++;
            reset();
            update();
        
        } else {
            alert("WRONG! Try again!");
            guesses--;
            if (guesses === 0) {
                userLosses++
                reset();
            };
            update();  
        }
    };


   //on key up, gets event.which ASCII number and converts to a string letter using fromCharCode. Converts any capital letters to lower case.
document.onkeyup = function(event) {

    var userInputLetter = String.fromCharCode(event.which).toLowerCase();
    userInputLetterGlobal = userInputLetter;
    // pushes userInputLetter into the array lettersGuessed
    lettersGuessed.push(userInputLetter);
    checkDouble();
    compare();
};