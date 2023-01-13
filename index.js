//pseudo code//

//Everytime you get a question wrong you subtract 1 secfrom the time, if you get it right, there are no penalties (time remains the same), track and add to the score each question.

//For questions we can create each question as an array objects//.
 
let questions = [

{questions: "Which Pokemon did Ash pick at the start of his journey?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Pikachu"}
];

let currentQuestion = 0;

//index for the questions, data-index per question? store in variable?//


//When the user clicks on the right or wrong answer in the question we will then move on to the next question// 

//Use Event delegation, you only need 1 event listener, otherwise you will need 4 separate event listeners//.

//localStorage to save the high score and display this on the same page and on the highscores.html//.