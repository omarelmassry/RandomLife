allRandomColor();

var eventCounter = 0;
var stopIt = new Audio("/stop_it_meme.mp3");

for (i = 0; i < document.querySelectorAll(".childe").length; i++) {
	document
		.querySelectorAll(".childe")
		[i].addEventListener("mouseenter", divRandomColor);
}

document.addEventListener("touchend", counterPlus);
document.addEventListener("keyup", counterPlus);
document.addEventListener("click", counterPlus);

function counterPlus() {
	eventCounter++;
	if (eventCounter > 10) {
		eventCounter = 0;
		document.querySelector(".parent").style.display = "none";
		document.querySelector(".stop").style.display = "grid";
		stopIt.play();
		setTimeout(toggle, 1999);
	} else {
		allRandomColor();
	}
	console.log(eventCounter);
}

function toggle() {
	document.querySelector(".parent").style.display = "block";
	document.querySelector(".stop").style.display = "none";
}

function allRandomColor() {
	var x = document.querySelectorAll(".childe");
	for (var i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = getRandomColor();
	}
}

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function divRandomColor() {
	this.style.backgroundColor = getRandomColor();
}
