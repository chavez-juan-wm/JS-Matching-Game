if(localStorage.getItem('highScore') === null)
    localStorage.setItem("highScore", 0);

if(localStorage.getItem('highLevel') === null)
    localStorage.setItem("highLevel", 1);

var numberOfFaces;
var theBody;
var theLeftSide;
var theRightSide;
var restartButton;
var timerId;
var score = 2000;
var level = 1;

function gameOver()
{
    clearInterval(timerId);
    $(".secondDiv").fadeIn(400);

    var highLevel = localStorage.getItem("highLevel");
    var highScore = localStorage.getItem("highScore");

    if (level > highLevel)
        localStorage.setItem("highLevel", level);

    if (score > highScore)
        localStorage.setItem("highScore", score);

    document.getElementById("overScore").innerHTML = "<p>Score: " + score + "</p>";
    document.getElementById("level").innerHTML = "<p>Level: " + level + "</p>";
    document.getElementById("highLevel").innerHTML = "<p>Highest Level: " + localStorage.getItem("highLevel")+ "</p>";
    document.getElementById("highScore").innerHTML = "<p>High Score: " + localStorage.getItem("highScore") + "</p>";

    theBody.removeEventListener("click", gameOver);
    theLeftSide.lastChild.removeEventListener("click", nextLevel);
}

function restart(event)
{
    event.stopPropagation();
    score = 2000;
    level = 1;
    numberOfFaces = 5;
    $(".delete").remove();
    $(".secondDiv").fadeOut(400);
    generateFace(numberOfFaces);
}

function nextLevel(event)
{
    event.stopPropagation();
    score += 200;
    document.getElementById("score").innerHTML = '<p id="score">Score: ' + score + '</p>';
    numberOfFaces += 5;
    level++;

    $(".delete").remove();
    clearTimeout(timerId);
    generateFace(numberOfFaces);
}

function generateFace(faces)
{
    timerId = setInterval(function(){ score = score - 10; document.getElementById("score").innerHTML = '<p id="score">Score: ' + score + '</p>'; }, 700);

    theBody = document.getElementsByTagName("body")[0];
    numberOfFaces = faces;
    theLeftSide = document.getElementById("leftSide");
    theRightSide = document.getElementById("rightSide");
    restartButton = document.getElementById("restart");

    for(var i = 1; i <= numberOfFaces; i++)
    {
        var img = document.createElement('img');
        img.src = 'images/vaultBoy.png';
        img.height = 100;
        img.width = 100;

        theLeftSide.appendChild(img).style.left = (Math.random() * 380) + "px";
        theLeftSide.appendChild(img).style.top = (Math.random() * 400) + "px";
        theLeftSide.appendChild(img).className = "delete";

        var cln = theLeftSide.cloneNode(true);
        theRightSide.appendChild(cln);
    }
    theRightSide.removeChild(theRightSide.lastChild);
    theLeftSide.lastChild.addEventListener("click", nextLevel);
    theBody.removeEventListener("click", gameOver);
    theBody.addEventListener("click", gameOver);
    restartButton.addEventListener("click", restart);
}