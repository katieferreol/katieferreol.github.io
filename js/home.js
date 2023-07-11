var dropdownTitle = document.getElementById('title');
var oneD = document.getElementById('one');
var twoD = document.getElementById('two');
var threeD = document.getElementById('three');
var fourD = document.getElementById('four');
var fiveD = document.getElementById('five');

var graphicDesigns = document.getElementById("graphicDesign");
var webDesigns = document.getElementById("webDesign");
var interactiveMedias = document.getElementById("interactiveMedia");
var videos = document.getElementById("video");
var illustrations = document.getElementById("illustration");

oneD.onmouseover = function () {
	oneD.style.color = "rgb(92, 57, 62)";
}
oneD.onmouseout = function () {
	oneD.style.color = "rgb(175, 114, 139)";
}

twoD.onmouseover = function () {
	twoD.style.color = "rgb(92, 57, 62)";
}
twoD.onmouseout = function () {
	twoD.style.color = "rgb(175, 114, 139)";
}

threeD.onmouseover = function () {
	threeD.style.color = "rgb(92, 57, 62)";
}
threeD.onmouseout = function () {
	threeD.style.color = "rgb(175, 114, 139)";
}

fourD.onmouseover = function () {
	fourD.style.color = "rgb(92, 57, 62)";
}
fourD.onmouseout = function () {
	fourD.style.color = "rgb(175, 114, 139)";
}

fiveD.onmouseover = function () {
	fiveD.style.color = "rgb(92, 57, 62)";
}
fiveD.onmouseout = function () {
	fiveD.style.color = "rgb(175, 114, 139)";
}

oneD.onclick = function () {
		dropdownTitle.innerHTML = "Graphic Design ▼";
		graphicDesigns.style.display = "inline";
		webDesigns.style.display = "none";
		videos.style.display = "none";
		illustrations.style.display = "none";
}

twoD.onclick = function () {
		dropdownTitle.innerHTML = "Web Design ▼" + "&nbsp &nbsp &nbsp &nbsp &nbsp";
		webDesigns.style.display = "inline";
		graphicDesigns.style.display = "none";
		videos.style.display = "none";
		illustrations.style.display = "none";
}

threeD.onclick = function () {
		dropdownTitle.innerHTML = "Game Design ▼" + "&nbsp &nbsp &nbsp &nbsp &nbsp";
		interactiveMedias.style.display = "inline";
		graphicDesigns.style.display = "none";
		webDesigns.style.display = "none";
		videos.style.display = "none";
		illustrations.style.display = "none";
}

fourD.onclick = function () {
		dropdownTitle.innerHTML = "Video Editing ▼" + "&nbsp &nbsp &nbsp &nbsp &nbsp";
		videos.style.display = "inline";
		graphicDesigns.style.display = "none";
		webDesigns.style.display = "none";
		illustrations.style.display = "none";
}

fiveD.onclick = function () {
		dropdownTitle.innerHTML = "Illustration ▼" + "&nbsp &nbsp &nbsp &nbsp &nbsp";
		illustrations.style.display = "inline";
		graphicDesigns.style.display = "none";
		webDesigns.style.display = "none";
		videos.style.display = "none";
}