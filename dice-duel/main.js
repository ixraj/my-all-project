function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomImageSource1 = "image/" + randomDiceImage1;
  
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImageSource2 = "image/" + randomDiceImage2;
  
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }
  }
  
  // Roll the dice when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    rollDice();
    
    // Add event listener to the button to roll the dice again
    document.getElementById("spinButton").addEventListener("click", rollDice);
  });
  