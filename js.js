//Setup initial vars
var score = 0;
var totalFrames = 2;
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
	if(cannotPlay == false){
		var randy = Math.floor(Math.random() * 10) + 1;
		
		//add the random score to our sum
		score += randy;
		
		currentRoll++;
		if(currentRoll > totalFrames){
			if(currentFrame < 2){
				currentFrame++;
				currentRoll = 1;
			}else{
				gameOver();
			}
		}
		
		//all good? let's rock and roll! show me the money!
		showTrack();
	}else{
		alert("Game Over!");
	}
}

function showTrack(){
	//basically print out the score and any extra info
    document.getElementById("frame").innerHTML = "Frame: " + currentFrame;
    document.getElementById("roll").innerHTML = "Roll: " + currentRoll;
    document.getElementById("track").innerHTML = score;
}

function gameOver(){
	//no more fun!
	cannotPlay = true;
	document.getElementById("play").setAttribute('disabled','disabled');
	currentRoll = '-';
	currentFrame = '-';
}
