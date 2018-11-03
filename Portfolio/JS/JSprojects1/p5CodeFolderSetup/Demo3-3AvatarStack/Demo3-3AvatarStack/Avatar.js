/* Avatar class - by Biles
 * Base class for a hierarchy of shaped-based avatars
 * Used in the AvStack class, which stores a collection
 * of currently active avitars on the canvas.
 *
 * Uses Perlin noise to move smoothly but randomly about the
 * canvas. Look up the noise() function on the p5.js
 * Reference page.  Basically, the offest that you pass to 
 * the noise() function is mapped to a number from 0.0 to 1.0
 * If you increment that offset by a little and call noise()
 * again, you'll get a number that's close but randomly
 * different from the previous number.  The bigger the
 * increment, the wider the range of possible values.
 * If you initialize your offsets randomly, you'll get different
 * sequences of Perlin noise, which is why there is a different
 * offset for the x and y coordinates below.  The increment
 * value of 0.006 was arrived at through trial and error.
 * You can change that value and see how it affects the behavoir
 * (smaller increments generate smoother movements).
 */
class Avatar {
	
	constructor() {
		// Set up Perlin sequence for x coordinate
		this.xOff = random(100);           // Offset for noise()
		this.xInc = 0.006;                 // Increment for xOff
		// Scale Perlin noise value to width of canvas
		this.x = noise(this.xOff) * width; // Current x location

		// Create separate Perlin sequence for y coordinate
		this.yOff = random(100);
		this.yInc = 0.006;
		this.y = noise(this.yOff) * height;
	}

	// Uses Perlin noise to move in both x and y dimensions
	move() {
		// Get the next Perlin noise value
		this.xOff = this.xOff + this.xInc;
		// Scale it to the width of the canvas
		this.x = noise(this.xOff) * width;

		// Do the same for the y coordinate
		this.yOff = this.yOff + this.yInc;
		this.y = noise(this.yOff) * height; // Scale to height
	}

	// Display a white 10-pixel-wide dot at (x,y)
	display() {
		stroke(100);
		strokeWeight(10);
		point(this.x, this.y);
	}
}
