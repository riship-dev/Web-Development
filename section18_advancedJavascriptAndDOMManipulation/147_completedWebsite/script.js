// Creating an array of all "drum" buttons.
drumButtons = document.querySelectorAll(".drum");
numberOfDrums = document.querySelectorAll(".drum").length;
// Adding mouse click event listener to all ".drum" buttons.
for (i = 0; i < numberOfDrums; i++) 
    drumButtons[i].addEventListener("click", handleClick);

// Adding key click event listener.
addEventListener("keydown", handleKey);

// Function that handles mouse click behavior.
function handleClick() {
    buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML) {
        case "w":
            tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Unexpected input");
    }
}
// Function that handles key click behavior.
function handleKey(event) {
    console.log(event.key);
    switch(event.key) {
        case "w":
            tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Unexpected input");
    }
}