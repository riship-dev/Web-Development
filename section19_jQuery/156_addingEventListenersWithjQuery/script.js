$(document).keydown(changeH1);

function changeH1(event) {
    $("h1").text(event.key);
}