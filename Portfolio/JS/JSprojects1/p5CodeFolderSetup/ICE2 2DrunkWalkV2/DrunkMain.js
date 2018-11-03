/**
 * Julia Hotaling
 * IGME-102: ICE2 - 2DrunkWalkV2, 1/24/18
 * using a class for the drunkard
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */

let d1;

function setup() {
    //put setup code here
    createCanvas(400, 300);
    background(0);
    colorMode(HSB); // hue, saturation, brightness 

    d1 = new Drunkard();
}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    d1.stagger();
}

function mousePressed() {
    d1.jump2Mouse();
}

function keyTyped() {
    if (key == 'c') {
        background(0);
    } else if (keyCode == 32) {
        d1.toggle();
    }
}
