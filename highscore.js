let highScores = document.querySelector('#highscores');
let clearScores = document.querySelector('#clear');
let noScore = document.querySelector('#noScores');

//This function will display the user initials and scores//
function displayHighScores() {

    let storedUser = localStorage.getItem("User");
    let user = JSON.parse(storedUser);

    let message = (user.name + ' ' + '- ' + user.score);

    let li = document.createElement('li');

    li.textContent = message;
    
    highScores.appendChild(li);
    isScores = true;
}

if(localStorage.getItem("User") != undefined){
    displayHighScores();
} else {
    noScore.textContent = 'No scores to show =('
}


clearScores.addEventListener('click', function (){
localStorage.clear();
location.reload();
})