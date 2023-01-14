//These are my questions which I've stored into an array of objects.
let userQuestions = [

{questions: "Which Pokemon did Ash start of his journey with?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Pikachu"},
{questions: "How many Harry Potter Movies are there?", answers: ["3", "5", "6", "8"], correctAnswer: "8"},
{questions: "Who was the 1994 Fifa World Cup Winner?", answers: ["Brazil", "France", "Portugal", "Argentina"], correctAnswer: "Brazil"},
{questions: "How many states are there in the America?", answers: ["45", "50", "65", "34"], correctAnswer: "50"},
{questions: "Which planet is closest to the sun?", answers: ["Neptune", "Jupiter", "Earth", "Mercury"], correctAnswer: "Mercury"}
];

let currentQuestion = 0;//This is a counter to track the current question//
let currentScore = 0; //This tracks the users current score and will increase if the user gets the question right.//
let outOfTime = false; // This boolean will turn on and will display the user will the appropriate message if they run out of time//

//This function will display the questions when the user clicks the start screen and will display them as button elements//
let questionSection = document.querySelector('#questionSection');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices'); //This accesses the div Choices//

function displayQuestions() {
    
    let question = userQuestions; //This stores the array of objects in another variable for clarity //
    questionSection.style.display = 'block'; //This makes the questionSection visible when the function is called//
    questionTitle.textContent = question[currentQuestion].questions; //This sets the H2 textContent to the value of the current question using the current question as the index//

    let answers = userQuestions[currentQuestion].answers; //This stores the answers of the current in a variable called answers, once again using the currentQuestion as the index//
    console.log(answers);
    for (let i = 0; i < answers.length; i++) { //This loops through the answers and creates a button for each answer.
       
        let answer = answers[i];
        let button = document.createElement('button');
        button.textContent = answer;
        choices.appendChild(button);

    //This function will listen to all the answers displayed and will add 10points to the correct score or deduct 5 secs from the timer and then call the question function again for the next question once an answer is selected.

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
                endQuiz(); //If the user has answered all questions then the endQuiz will execute.
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
};

//This event listener takes the input from the user and sends their initials and scores to the highscore page when they press the submit btn.
let initials = document.querySelector('#initials');

submitBtn.addEventListener("click", function (event){
    event.preventDefault(); //This prevents the default behaviour when the user hits submit//
    let initial = initials.value; //This is the value of the current input from the user in the ID initals//
    let newUser  = {name: initial, score: currentScore}; //This creates a new object with the properties name + score with the values initial input and the users current score.

    let users = localStorage.getItem("Users"); //This accesses localStorage and checks if an existing item called 'User' exists, if it exists it will return the value as a string.

    if (users) { //This checks if users is true and not equal to null or undefined.
        users = JSON.parse(users); //JSON.parse converts the string value into a Javascript object and is necessary because when items are added to localStorage they're stored as a string//
        users.push(newUser);//This adds the new user objects to the array of existing users. 

    } else {
        users = [newUser]; //If there are no existing items callled user, then we create a new array as the user item.

    }
    localStorage.setItem("Users", JSON.stringify(users));//The array is then turned into a string so that it can be added to localstorage using JSON.stringify.
    window.location.href = "highscores.html";//The user is then redirected to the highscore pae.
});


//This is a timer function to start when the user clicks 'Start Quiz' and hides the start-screen, if the time hits 0 then the quiz will end// 
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
        outOfTime = true;
        endQuiz();//this function is called when the timer hits 0.//
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










//pseudo code//

//Everytime you get a question wrong you subtract 1 secfrom the time, if you get it right, there are no penalties (time remains the same), track and add to the score each question.

//For questions we can create each question as an array objects//.


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