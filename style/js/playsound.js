var notPlaying = true, playingSound = 0, playingID = 0, progressID = 0, 
	playingProgress = 0, playingProgressClick = 0;

//var playingID = void;



function play_single_sound(id) {
	if(notPlaying){ //start playing	
			if(playingID != id && playingID != 0){
				playingSound.currentTime = 0;
				playingProgress.style.width = `0%`;
			}
			playingID = id;
			progressID = id+"progress";
			clickID = id+"click";
			playingSound = document.getElementById(playingID);
			playingProgress = document.getElementById(progressID);
			playingProgressClick = document.getElementById(clickID);
			playingSound.addEventListener('timeupdate', updateProgress);
			playingSound.addEventListener('ended', resetSound);
			playingProgressClick.addEventListener('click', setProgress);
			playingSound.play();
			notPlaying = false;
		}
	else { //while there is music playing
			playingSound.pause();
			if(playingID == id){  //click to pause
				//playingSound.currentTime = 0;  //rewind to beginning
				notPlaying = true;
			}
			else { //click another piece
				playingSound.currentTime = 0;
				playingProgress.style.width = `0%`
				playingID = id;
				progressID = id+"progress";
				clickID = id+"click";
				playingSound = document.getElementById(playingID);
				playingProgress = document.getElementById(progressID);
				playingProgressClick = document.getElementById(clickID);
				playingSound.addEventListener('timeupdate', updateProgress);
				playingSound.addEventListener('ended', resetSound);
				playingProgressClick.addEventListener('click', setProgress);
				playingSound.play();
			}
		}
}

function updateProgress(e) {
	const {duration, currentTime} = playingSound;
	const progressPercent = (currentTime / duration) * 100;
	playingProgress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = playingSound.duration;

	playingSound.currentTime = (clickX / width) * duration;
}

function resetSound(e) {
	playingSound.pause();
	notPlaying = true;
	playingSound.currentTime = 0;
}