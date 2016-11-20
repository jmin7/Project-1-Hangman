window.onload = function () {


  var words;              //word array
  var word ;              // Selected word
  var each ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses


  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Play
  var play = function () {
    var words = [
      "JAVASCRIPT", "HANGMAN", "DEBUGGING", "GAMES",
      "COMMAND", "FIZZBUZZ"
      ];
    word = words[Math.floor(Math.random() * words.length)];
    counter = 0;
    lives = 7;
    createButtons();
    blank();
    notice();
  }

  // create alphabet button
  var createButtons = function () {
    buttons = document.getElementById('buttons');
    letters = document.createElement('ul');
    buttons.appendChild(letters);
    letters.id = 'alphabet';
    for (var i = 0; i < alphabet.length; i++) {
      alpha = document.createElement('li');
      letters.appendChild(alpha);
      alpha.innerHTML = alphabet[i];
      compare();
    }
  }


  // Create guesses ul
   var blank = function () {
     text = document.getElementById('placeForWord');
     answer = document.createElement('ul');
    for (var i = 0; i < word.length; i++) {
      each = document.createElement('li');
      each.setAttribute('id', 'selectedletter');
    if (word[i] !== 0) {
      each.innerHTML = "_";
      }
    text.appendChild(answer);
    answer.appendChild(each);
    guesses.push(each);
    }
  }


  // left lives / win
   var notice = function () {
    var livesLeft = document.getElementById("lives");
    livesLeft.innerHTML = "You have " + lives + " lives left";
    if (lives < 1) {
      livesLeft.innerHTML = "Game Over !! " + " " +" The word was " + word;
      buttons.removeChild(letters);
      letters.removeChild(alpha);
      startButton = document.getElementById('start');
      startButton.innerHTML = "Try Again !"
      }

    for (var i = 0; i < guesses.length; i++) {
      if (counter === guesses.length) {
      livesLeft.innerHTML = "You Win !";
      buttons.removeChild(letters);
      letters.removeChild(alpha);
      startButton = document.getElementById('start');
      startButton.innerHTML = "Try Again !"
    }
    }
  }



  // OnClick Function
  var compare = function () {
    alpha.onclick = function () {
     var letterClicked = this.innerHTML;
     this.setAttribute('id', 'click');
     this.onclick = null;
      for (var i = 0; i < word.length; i++) {
       if (word[i] === letterClicked) {
        guesses[i].innerHTML = letterClicked;
        counter ++;
        notice();
        }
      }
     var j = (word.indexOf(letterClicked));
      if (j === -1) {
       lives --;
       animate();
       notice();
      }
    }
  }


  var animate = function () {
    if (lives === 6) {
      document.getElementById('image').src ='image/hangman2.png';
    }
    else if (lives === 5) {
      document.getElementById('image').src = 'image/hangman3.png';
    }
    else if (lives === 4) {
      document.getElementById('image').src = 'image/hangman4.png';
    }
    else if (lives === 3) {
      document.getElementById('image').src = 'image/hangman5.png';
    }
    else if (lives === 2) {
      document.getElementById('image').src = 'image/hangman6.png';
    }
    else if (lives === 1) {
      document.getElementById('image').src = 'image/hangman7.png';
    }
    else if (lives === 0) {
      document.getElementById('image').src = 'image/hangman8.png';
    }
    }


// game start
play();


   // start or play again
   document.getElementById('start').onclick = function() {
    if (lives < 1 || counter === guesses.length) {
      text.removeChild(answer);
      startButton = document.getElementById('start');
      startButton.innerHTML = "New Game"

      document.getElementById('image').src ='image/hangman1.png';
      guesses = [ ];
      play();
    }

  else {
    buttons.removeChild(letters);
    letters.removeChild(alpha);

    text.removeChild(answer);
    document.getElementById('image').src ='image/hangman1.png';

    guesses = [ ];
    play();
    }
}
}
