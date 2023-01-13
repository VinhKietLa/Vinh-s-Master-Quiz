//pseudo code//

//Everytime you get a question wrong you subtract 1 secfrom the time, if you get it right, there are no penalties (time remains the same), track and add to the score each question.

//For questions we can create each question as an array objects//.



//These are my questions
let userQuestions = [

{questions: "Which Pokemon did Ash start of his journey with?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Pikachu"},
{questions: "How many Harry Potter Movies are there?", answers: ["3", "5", "6", "8"], correctAnswer: "8"},

];

//This is a counter to track the current question
let currentQuestion = 0;


//This function will display the questions when the user clicks the start screen, in an unordered list//

function displayQuestions() {

    for (let i = 0; i < userQuestions.length; i++) {

        let question = userQuestions[i].questions;
        console.log(question);
    
        
    
    
    
    }


};

displayQuestions();


//This is a timer function to start when the user clicks 'Start Quiz' and hides the start-screen// 
let startScreen = document.querySelector('#start-screen');
let timer = document.querySelector('#time');
let timeLeft = 30;

function startQuizTimer() {
startScreen.style.display = 'none';
let timerInterval = setInterval(function(){
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
    }, 1000);
}

//functions that execute when the user clicks start quiz button//
function beginQuiz() {
    startQuizTimer();

}

//Start Quiz Button//
let startQuizBtn = document.querySelector('#start');

startQuizBtn.addEventListener('click', beginQuiz);


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