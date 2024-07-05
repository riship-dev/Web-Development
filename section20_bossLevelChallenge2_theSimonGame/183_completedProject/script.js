buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
started = false;
level = 0;

$(".btn").click (
    function () {
        userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);

        playSound(userChosenColour);
        animatePress(userChosenColour);
    }
);
$(document).keydown (
    function () {
        if(!started) {
            nextSequence();
            started = true;
        }
    }
);

function nextSequence() {
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