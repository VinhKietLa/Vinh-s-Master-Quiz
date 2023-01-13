//pseudo code//

//Everytime you get a question wrong you subtract 1 secfrom the time, if you get it right, there are no penalties (time remains the same), track and add to the score each question.

//For questions we can create each question as an array objects//.



//These are my questions
let userQuestions = [

{questions: "Which Pokemon did Ash start of his journey with?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Pikachu"},
{questions: "How many Harry Potter Movies are there?", answers: ["3", "5", "6", "8"], correctAnswer: "8"},
{questions: "Who was the 1994 Fifa World Cup Winner?", answers: ["Brazil", "France", "Portugal", "Argentina"], correctAnswer: "Brazil"},
{questions: "How many states are there in the America?", answers: ["45", "50", "65", "34"], correctAnswer: "50"},
{questions: "Which planet is closest to the sun?", answers: ["Neptune", "Jupiter", "Earth", "Mercury"], correctAnswer: "Mercury"}
];

//This is a counter to track the current question
let currentQuestion = 0;
let currentScore = 0;
let outOfTime = false;

//This function will display the questions when the user clicks the start screen, in an unordered list//
let questionSection = document.querySelector('#questionSection');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices'); //This accesses the div Choices//

function displayQuestions() {
    
    let question = userQuestions; //This is the current question//
    questionSection.style.display = 'block'; //This makes the question section visible//
    questionTitle.textContent = question[currentQuestion].questions; //This sets the H2 textContent to the value of the selected question//

    // let choices = document.querySelector('#choices'); //This accesses the div Choices//
    let answers = userQuestions[currentQuestion].answers; //This stores the answers of the current in a variable called answers
    console.log(answers);
    for (let i = 0; i < answers.length; i++) { //This loops through the answers and creates a button for each answer.
       
        let answer = answers[i];
        let button = document.createElement('button');
        button.textContent = answer;
        button.id = "UserChoice";
        console.log(answer);
        choices.appendChild(button);
//This function will listen to all the answers displayed and will add 10points to the correct score or deduct 10secs from the timer and then call the question function again for the next question once an answer is selected.

    button.addEventListener("click", function(e) {
        e.stopPropagation();
            let selectedAnswer = e.target.textContent;
            console.log(userQuestions[currentQuestion].correctAnswer);
            if (selectedAnswer === userQuestions[currentQuestion].correctAnswer){
                currentScore+= 10;
                // localStorage.setItem("Score", JSON.stringify(currentScore));
                choices.textContent = '' //Setting the textContent to an empty string before running the displayQuestions again so that only new answers are displayed.
                currentQuestion++;
    
            } else {
                timeLeft -= 5;
                choices.textContent = ''
                currentQuestion++;
            } 
            
            if (currentQuestion === userQuestions.length) {
                endQuiz();
            } else {
                displayQuestions();
            }        
    });
};
};




//This function will run when the game has ended and will allow the user to submit their initials and after hitting submit they will be taken to the highscore page where they can clear highscore or go back to the quiz home page.


let quizEnded = document.querySelector('#end-screen');
let h2 = document.querySelector('#end-screen h2');
let submitBtn = document.querySelector('#submit');
let finalScore = document.querySelector('#final-score');

function endQuiz() { //This function hides the questions section and displays the highscore section
    questionSection.style.display = 'none';
    quizEnded.style.display = 'block';

    if(outOfTime) {
        h2.textContent = 'Sorry you ran out of time!';
        finalScore.textContent = currentScore;

    } else if (currentScore === 50){
        h2.textContent = 'WOW, you answered all the questions correctly!';
        finalScore.textContent = currentScore;

    } else {
        h2.textContent = 'Good Job!';
        finalScore.textContent = currentScore;

    }
}
//This event listener takes the input from the user and sends their initials and scores to the highscore page when they press the submit btn.
let initials = document.querySelector('#initials');

submitBtn.addEventListener("click", function (event){
    event.preventDefault();
    let initial = initials.value;
    let newUser  = {name: initial, score: currentScore};

    let users = localStorage.getItem("Users");

    console.log(users);
    if (users) {
        users = JSON.parse(users);
        console.log(users);
        users.push(newUser);
        console.log(users);

    } else {
        users = [newUser];
        console.log(users);

    }
    localStorage.setItem("Users", JSON.stringify(users));
    window.location.href = "highscores.html";
});



//This is a timer function to start when the user clicks 'Start Quiz' and hides the start-screen// 
let startScreen = document.querySelector('#start-screen');
let timer = document.querySelector('#time');
let timeLeft = 30;

function startQuizTimer() {
startScreen.style.display = 'none';
let timerInterval = setInterval(function(){
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        timer.textContent = 0;
        // Calls function to create and append image
        outOfTime = true;
       endQuiz();
      }
    }, 1000);
}

//functions that execute when the user clicks start quiz button//
function beginQuiz() {
    startQuizTimer();
    displayQuestions();
}

//Start Quiz Button//
let startQuizBtn = document.querySelector('#start');

startQuizBtn.addEventListener('click', beginQuiz);



//Todo //

// When the timer hits 0, the quiz needs to end, right now the timer hits 0 and stays on 0, the user should be taken to the All done! with a message that tells them why the game ended early. 

//Update the home screen text to make it more personal//




//index for the questions, data-index per question? store in variable?//


//When the user clicks on the right or wrong answer in the question we will then move on to the next question// 

//Use Event delegation, you only need 1 event listener, otherwise you will need 4 separate event listeners//.

//localStorage to save the high score and display this on the same page and on the highscores.html//.


//Add event listener to the start quiz button to start timer when the user clicks 'Start quiz'
//Once they press start quiz, then we should show the first question//



//Acceptance Criteria
//Create a code quiz that contains the following requirements:

// start button that when clicked a timer starts and the first question appears.

//Questions contain buttons for each answer.
//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock
//The quiz should end when all questions are answered or the timer reaches 0.

//When the game ends, it should display their score and give the user the ability to save their initials and their score//