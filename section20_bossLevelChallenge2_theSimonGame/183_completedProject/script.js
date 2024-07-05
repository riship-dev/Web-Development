buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
started = false;
level = 0;

$(document).keydown (
    function () {
        if(!started) {
            nextSequence();
            started = true;
        }
    }
);
$(".btn").click (
    function () {
        userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);
    }
);

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) 
            setTimeout(function() {nextSequence();}, 1000);
    }
}
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
function playSound(colourName) {
    audio = new Audio("./sounds/" + colourName + ".mp3");
    audio.play();
}
function animatePress(colourName) {
    $("#" + colourName).addClass("pressed");
    setTimeout (
        function () {
            $("#" + colourName).removeClass("pressed");
        }
        , 100
    );
}