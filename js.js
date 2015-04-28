//Setup initial vars
var score = 0;
var totalRolls = 20;
var extraRolls = 0;
var rolls = new Array();
var currentRoll = 1;
var currentFrame = 1;

//Le functions!
function roll() {
    scoreTrack();
}

function scoreTrack() {
    document.getElementById("track").innerHTML = score;
}
