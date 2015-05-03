//Setup initial vars
var score = 0;
var totalFrames = 10;
var rollsPerFrame = 2;
var currentRoll = 1;
var currentFrame = 1;
var currentRollGame = 0;
var pins = 10;

//vars to track the individual scores and the rolls with special scoring (strikes/spares)
var scores = [];
var special = [];

//other vars
var cannotPlay = false;
var hasStrike = false;
var hasSpare = false;

//Le functions!
function roll(){
	if(cannotPlay == false){
        //random number between 1 and remaining pins
		var randy = Math.floor(Math.random() * pins) + 1;
		
        //and substract it from this frame's pins
		pins -= randy;
        //and register the score in the general track of scores
        scores[currentRollGame] = randy;
        
        //sum all!
        score += randy;
        //check for strike before and sum
        if(special[currentRollGame-1] == 'strike' || special[currentRollGame-2] == 'strike') score += randy;
        //check for spare before and sum
        if(special[currentRollGame-1] == 'spare') score += randy;
		
        //if we knocked all our pins in the first roll, we have a Strike!
		if(pins == 0 && currentRoll == 1){
			hasStrike = true;
            //register special score
            special[currentRollGame] = 'strike';
		}
        //if we are on the second roll and we managed to take down all of the pins, means we had a Spare
        if(currentRoll == 2 && pins == 0){
			hasSpare = true;
            //register special score
            special[currentRollGame] = 'spare';            
		}
        currentRollGame++;
        console.log(scores);
        console.log(special);
		
        //if we are in the final frame and we had a strike or a spare, sum the extra rolls
        if(currentFrame == totalFrames){
            if(hasSpare) rollsPerFrame = 3;
            if(hasStrike) rollsPerFrame = 4;
        }
        
        //go to next roll or frame
        if(pins > 0){
            if(currentRoll < rollsPerFrame){
                //in what roll we are in this current frame
                currentRoll++;
            }else{
                currentFrame++;
                currentRoll = 1;
                pins = 10;
            }
        }else{
            currentFrame++;
            currentRoll = 1;
            pins = 10;
        }
        
        //let's see if we are still in the game
        if(currentFrame > totalFrames){
            gameOver();
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
