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
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout (
            function () {
                $("body").removeClass("game-over");
            }
            , 200
        );
        $("#level-title").text("Game Over, Press Any Key to Restart");
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
function playSound(name) {
    audio = new Audio("./sounds/" + name + ".mp3");
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