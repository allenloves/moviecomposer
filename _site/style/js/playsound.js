var notPlaying = true, playingSound = 0, playingID = 0;
//var playingID = void;



function play_single_sound(id) {
	if(notPlaying){ //start playing
			playingSound = document.getElementById(id);
			playingID = id;
			playingSound.play();
			notPlaying = false;
		}
	else {
			playingSound.pause();
			if(playingID == id){  //click to pause
				//playingSound.currentTime = 0;  //rewind to beginning
				notPlaying = true;
			}
			else { //click another piece
				playingSound.currentTime = 0;
				playingSound = document.getElementById(id);
				playingID = id;
				playingSound.play();
			}
		}
	}