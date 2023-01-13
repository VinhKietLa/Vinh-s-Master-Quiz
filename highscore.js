let highScores = document.querySelector('#highscores');
let clearScores = document.querySelector('#clear');
let noScore = document.querySelector('#noScores');

//This function will display the user initials and scores//
function displayHighScores() {

    let storedUser = localStorage.getItem("User");

    console.log(storedUser);
    let user = JSON.parse(storedUser);
    console.log(user);
    let message = (user.name + ' ' + '- ' + user.score);

    let li = document.createElement('li');

    li.textContent = message;
    
    highScores.appendChild(li);
}

    displayHighScores();


// if(localStorage.getItem("User") != undefined){
//     displayHighScores();
// } else {
//     noScore.textContent = 'No scores to show =('
// }


clearScores.addEventListener('click', function (){
localStorage.clear();
location.reload();
})