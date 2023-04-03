// initializing my variables to connect to the DOM and pull the tags to update in the js
var timeEl = document.querySelector(".timer");
var clickBtn = document.querySelector("#play-button");
var questionh1 = document.querySelector("h1");
var box1text = document.querySelector(".box1");
var box2text = document.querySelector(".box2");
var box3text = document.querySelector(".box3");
var box4text = document.querySelector(".box4");
var myScore = document.querySelector(".score");
var scoreForm = document.querySelector(".card");
var main = document.querySelector("main");
var playerName = document.querySelector("#name-text");
var nameFill = document.querySelector("#name-form");
var playerTotal = document.querySelector("#name-list");
var highScoreTotal = document.querySelector("#name-count");

// initializing my global variables to call in and out of functions
var names = [];
var secondsLeft = 300;
var score = secondsLeft;
var timerInterval;
var startQuiz = false;
var intervalId = setInterval(updateCounter, 1000);
var i = 1;
var endTime = 0;

// object set up for my quiz questions and answers
var quiz = {
  q1: {
    question1: "What is the capital of France?",
    answers1: ["Paris", "Berlin", "London", "Madrid"],
    correct1: "Paris",
  },
  q2: {
    question2: "What is the largest country by land area?",
    answers2: ["China", "United States", "Russia", "Brazil"],
    correct2: "Russia",
  },
  q3: {
    question3: "Who directed the movie 'Jaws'?",
    answers3: [
      "Steven Spielberg",
      "George Lucas",
      "James Cameron",
      "Martin Scorsese",
    ],
    correct3: "Steven Spielberg",
  },
  q4: {
    question4: "What is the largest ocean?",
    answers4: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct4: "Pacific",
  },
  q5: {
    question5: "What is the capital of Japan?",
    answers5: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    correct5: "Tokyo",
  },
};

// this function starts the timer for the game
function startTime() {
  // Sets interval in variable

  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " second(s) left";

    if (secondsLeft <= 0) {
      alert("Out of time!");
      GameOver();
      clearInterval(timerInterval);
    }
  }, 1000);
}

//this function ends the game and sets the DOM to match a new screen
function GameOver() {
  clearInterval(timerInterval);
  endTime = secondsLeft;
  timeEl.textContent = "Your score is: " + endTime;
  main.style.display = "block";
  box1text.style.display = "none";
  box2text.style.display = "none";
  box3text.style.display = "none";
  box4text.style.display = "none";
  questionh1.style.display = "none";
  scoreForm.style.display = "block";
  nameFill.style.display = "block";

  clickBtn.textContent = "Play again?";
  clickBtn.style.display = "block";
}

//this is an event listener looking for a click to start the game
clickBtn.addEventListener("click", function () {
  if (!startQuiz) {
    startTime();
    secondsLeft = 300;

    haslengthRun = true;
    clickBtn.style.display = "none";
    box1text.style.display = "block";
    box2text.style.display = "block";
    box3text.style.display = "block";
    box4text.style.display = "block";
    questionh1.style.display = "block";
    main.style.display = "flex";
    timeEl.style.display = "block ";


    scoreForm.style.display = "none";

    askOne();
  }
});

//this initializes the high scores button to bring up the log of players and scores
myScore.addEventListener("click", function () {
  GameOver();
  timeEl.style.display = "none ";

  clickBtn.textContent = "Let's Play";
  clickBtn.style.display = "block";
});

//this removes the event listeners for each questions answers
function Remove() {
  box1text.removeEventListener("click", correctClick);
  box1text.removeEventListener("click", incorrectClick);
  box2text.removeEventListener("click", correctClick);
  box2text.removeEventListener("click", incorrectClick);
  box3text.removeEventListener("click", correctClick);
  box3text.removeEventListener("click", incorrectClick);
  box4text.removeEventListener("click", correctClick);
  box4text.removeEventListener("click", incorrectClick);
}

//this function notifies you if your answer is correct and also steps through the questions
function correctClick() {
  alert("CORRECT!");

  if (i == 1) {
    askTwo();
    i++;
  } else if (i == 2) {
    askThree();
    i++;
  } else if (i == 3) {
    askFour();
    i++;
  } else if (i == 4) {
    askFive();
    i++;
  } else {
    GameOver();
    i = 1;
  }
}

//this function notifies you if you're incorrect and calls the update fuction to deducts :15 seconds
function incorrectClick() {
  // Display an alert message and take 15 seconds off the setInterval
  alert("Incorrect :15s time penalty!");
  clearInterval(intervalId);
  intervalId = setInterval(updateCounter, 1000);
  secondsLeft -= 15;
}

//this continues the timer to deduct after penalty
function updateCounter() {
  secondsLeft--;
}

//this is question 1
function askOne() {
  Remove();
  questionh1.textContent = quiz.q1.question1;

  box1text.textContent = quiz.q1.answers1[0];
  box2text.textContent = quiz.q1.answers1[1];
  box3text.textContent = quiz.q1.answers1[2];
  box4text.textContent = quiz.q1.answers1[3];

  box1text.addEventListener("click", correctClick);
  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
  // Check if the button has been clicked before
}

//this is questions 2
function askTwo() {
  Remove();
  questionh1.textContent = quiz.q2.question2;

  box1text.textContent = quiz.q2.answers2[0];
  box2text.textContent = quiz.q2.answers2[1];
  box3text.textContent = quiz.q2.answers2[2];
  box4text.textContent = quiz.q2.answers2[3];

  box1text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
  box3text.addEventListener("click", correctClick);

  //   askThree();
}

//this is question 3
function askThree() {
  Remove();
  questionh1.textContent = quiz.q3.question3;

  box1text.textContent = quiz.q3.answers3[0];
  box2text.textContent = quiz.q3.answers3[1];
  box3text.textContent = quiz.q3.answers3[2];
  box4text.textContent = quiz.q3.answers3[3];

  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
  box1text.addEventListener("click", correctClick);
}

//this is question 4
function askFour() {
  Remove();

  questionh1.textContent = quiz.q4.question4;

  box1text.textContent = quiz.q4.answers4[0];
  box2text.textContent = quiz.q4.answers4[1];
  box3text.textContent = quiz.q4.answers4[2];
  box4text.textContent = quiz.q4.answers4[3];

  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box1text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", correctClick);
}

//this is question 5
function askFive() {
  Remove();

  questionh1.textContent = quiz.q5.question5;

  box1text.textContent = quiz.q5.answers5[0];
  box2text.textContent = quiz.q5.answers5[1];
  box3text.textContent = quiz.q5.answers5[2];
  box4text.textContent = quiz.q5.answers5[3];

  box3text.addEventListener("click", incorrectClick);
  box2text.addEventListener("click", incorrectClick);
  box4text.addEventListener("click", incorrectClick);
  box1text.addEventListener("click", correctClick);
}

// The following function renders items in a name list as li elements
function rendernames() {
  // Clear playerTotal element and update highScoreTotal
  playerTotal.innerHTML = "";
  //   highScoreTotal.textContent = names.length;

  // Render a new li for each name
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    var li = document.createElement("li");
    li.textContent = name;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = " Remove ❌";

    li.appendChild(button);
    playerTotal.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored names from localStorage
  var storednames = JSON.parse(localStorage.getItem("names"));

  // If names were retrieved from localStorage, update the names array to it
  if (storednames !== null) {
    names = storednames;
  }

  // This is a helper function that will render names to the DOM
  rendernames();
}

//this fuction stores the names when they're entered locally
function storenames() {
  // Stringify and set key in localStorage to names array
  localStorage.setItem("names", JSON.stringify(names));
}

// Add submit event to form
nameFill.addEventListener("submit", function (event) {
  event.preventDefault();

  var nameText = playerName.value.trim() + " - " + endTime;

  // Return from function early if submitted nameText is blank
  if (nameText === "") {
    return;
  }

  // Add new nameText to names array, clear the input
  names.push(nameText);
  playerName.value = "";

  // Store updated names in localStorage, re-render the list
  storenames();
  rendernames();
});

// Add click event to playerTotal element
playerTotal.addEventListener("click", function (event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the name element from the list
    var index = element.parentElement.getAttribute("data-index");
    names.splice(index, 1);

    // Store updated names in localStorage, re-render the list
    storenames();
    rendernames();
  }
});

// Calls init to retrieve data and render it to the page on load
init();
