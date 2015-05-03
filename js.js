//Setup initial vars
var score = 0;
var totalFrames = 2;
var pinPerFrame = 2;
var extraRolls = 0;
var currentRoll = 1;
var currentFrame = 1;
var pins = 10;

var cannotPlay = false;

var hasStrike = false;

var hasSpare = false;

//Le functions!
function roll(){
	if(cannotPlay == false){
        //random number between 1 and remaining pins
		var randy = Math.floor(Math.random() * pins) + 1;
		
		//add the random score to our sum
		score += randy;
        //and substract it from this frame's pins
		pins -= randy;
		
        //if the random number was 10, means we inmediately had all our pins out
		if(pins == 0 && currentRoll == 1){
			hasStrike = true;
		}
        //but is the random number was less than ten and still we managed to take down all of the pins, means we had a Spare
        if(randy < 10 && pins == 0){
			hasSpare = true;
		}
		
		currentRoll++;
		if(currentRoll > totalFrames){
			if(currentFrame < 2){
				currentFrame++;
				currentRoll = 1;
				sumRollsFrame = 0;
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
