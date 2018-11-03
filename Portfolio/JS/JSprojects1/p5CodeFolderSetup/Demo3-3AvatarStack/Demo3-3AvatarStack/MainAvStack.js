/**
 * Demo3-3 Avatar Stack - by Al Biles
 * Main driver to test Avatar and AvAtack classes.
 * This will be the jumping off point for your first
 * major "project".  For now, the Avatars are all white
 * dots on a black background that move around using
 * Perlin noise.
 *
 * ICE 3-3 is to pop the top element of the AvStack when
 * the user types a '-'.
 */

let a1; // A single Avatar to play with
let avS; // An Avatar Stack to play with

function setup() {
	// Window big enough for Aviatars to wander freely
	createCanvas(600, 400);
	colorMode(HSB);

	// Create the actual Avatar object
	a1 = new Avatar();

	//Create the actual AvStack object
	avS = new AvStack();
}

function draw() {
	background(0); // Clear canvas to black

	// Test the single Avatar
	a1.move();
	a1.display();

	// Test the Avatar stack
	avS.moveAll();
	avS.displayAll();
}

function keyTyped() {
	if (key == 'a')
		avS.myPush(new Avatar());
	if (key == 'c')
		avS.myClear();
}
