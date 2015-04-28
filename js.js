//Setup initial vars
var score = 0;
var totalRolls = 20;
var extraRolls = 0;
var currentRoll = 1;
var currentFrame = 1;
var cannotPlay = false;

var sumRolls = 0;

var isStrike = false;
var strikeXtra = 0;

var isSpare = false;
var spareXtra = 0;

//Le functions!
function roll(){
	var randy = Math.floor(Math.random() * 10) + 1;
	
	//add the random score to our sum
	score += randy;
	
	currentRoll++;
	if(currentRoll > 2){
		currentFrame++;
		currentRoll = 1;
	}
	
	//all good? let's rock and roll!
    scoreTrack();
}

function scoreTrack(){
    document.getElementById("track").innerHTML = score;
}
