numberOfDrums = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button ")[i].addEventListener("click", handleClick);
}

function handleClick() {
    tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play();
}