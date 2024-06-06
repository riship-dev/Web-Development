uName = prompt("What is your name?: ").toLowerCase();
alert(
    "Hi "
    + uName.slice(0,1).toUpperCase()
    + uName.slice(1, uName.length)
);