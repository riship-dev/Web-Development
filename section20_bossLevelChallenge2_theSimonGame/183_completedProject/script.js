buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

$(".btn").click (
    function () {
        userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
    }
);

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    audio.play();
}