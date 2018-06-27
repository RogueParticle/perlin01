var w = 600;
var h = 600;
var bgc = 81;
var xoff = 0;

function setup() {
	createCanvas( w, h);

}

function draw() {
	background(bgc);
	//var x = random(w);
	var x = map(noise(xoff), 0, 1, 0, w);
	ellipse(x, 300, 24, 24);
	xoff += 0.01;
}
