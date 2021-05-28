var notPlaying = true, playingSound = 0, playingID = 0;
//var playingID = void;

function play_single_sound(id) {
	if(notPlaying){
			playingSound = document.getElementById(id);
			playingID = id;
			playingSound.play();
			notPlaying = false;
		}
	else {
			playingSound.pause();
			if(playingID == id){
				notPlaying = true;
			}
			else {
				playingSound.currentTime = 0;
				playingSound = document.getElementById(id);
				playingID = id;
				playingSound.play();
			}
		}
	}