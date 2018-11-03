/**
 * Julia Hotaling
 * IGME-102: Demo1 - 1DrunkWalk, 1/22/18
 * p5 demo
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
let xLoc; //current x location of the line
let yLoc; //current y location of the line
let hueVal;
//using var would make the scope the entire webpage, it's a no

const maxDev = 15;
//variable is constant and can't be changed later on

function setup() {
    //put setup code here
    createCanvas(400, 300);
    background(0);
    colorMode(HSB); // hue, saturation, brightness 

    xLoc = width / 2; //initializes xLoc to the center of the canvas
    yLoc = height / 2; //initializes yLoc to the center of the canvas
    hueVal = random(360); //sets color to random hue
}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    //put drawing code here
    stroke(hueVal, 100, 100);
    //line(100, 200, 300, 400);

    //moves line to new location
    let newX = xLoc + random(-maxDev, maxDev);
    let newY = yLoc + random(-maxDev, maxDev);

    line(xLoc, yLoc, newX, newY);

    xLoc = newX;
    yLoc = newY;
    //% does modulus, which makes it wrap around. It's the remainder 
    hueVal = (hueVal + 5) % 360; //changes hue of line 

    //wraps the drunk walker around the screen when it goes off the edges
    if (xLoc > width) {
        xLoc = 0;
    } else if (xLoc < 0) {
        xLoc = width;
    } else if (yLoc > height) {
        yLoc = 0;
    } else if (yLoc < 0) {
        yLoc = height;
    }

}
