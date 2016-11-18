window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var animate;            // Animate the hangman

  // Get elements
  var showLives = document.getElementById("mylives");

  // create alphabet ul
  var buttons = function () {
    letterButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      letterButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }



  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over !! " + " " +" The word was " + word;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();

    // Animate hangman
        animate = function () {
        if (lives === 6) {
      document.getElementById('image').src = 'image/hangman1.jpg';
      }
      else if (lives === 5) {
      document.getElementById('image').src = 'image/hangman2.jpg';
      }
      else if (lives === 4) {
      document.getElementById('image').src = 'image/hangman3.jpg';
      }
      else if (lives === 3) {
      document.getElementById('image').src = 'image/hangman4.jpg';
      }
      else if (lives === 2) {
      document.getElementById('image').src = 'image/hangman5.jpg';
      }
      else if (lives === 1) {
      document.getElementById('image').src = 'image/hangman6.jpg';
      }
      else if (lives === 0) {
      document.getElementById('image').src = 'image/hangman7.jpg';
      }
      }
        animate();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    var words = [
    "javascript",
    "hangman",
    "debugging",
    "games",
    "command",
    "fizzbuzz"
    ];

    word = words[Math.floor(Math.random() * words.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 7;
    counter = 0;
    space = 0;
    result();
    comments();
    // canvas();
  }

  play();


   // Reset

   document.getElementById('reset').onclick = function() {
     correct.parentNode.removeChild(correct);
     letters.parentNode.removeChild(letters);

     play();
  }
}
