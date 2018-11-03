/**
 * Julia Hotaling
 * IGME-102: Demo4 - 3ChasingBot, 2/9/18
 * following the mouse demo
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */

let x;
let y;
let speed = 2;

function setup() {
    createCanvas(600, 400);
    x = width / 2;
    y = height / 2;
}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    background(255);
    if (mouseX < x) {
        x = x - speed;
    } else {
        x = x + speed;
    }

    if (mouseY < y) {
        y = y - speed;
    } else {
        y = y + speed;
    }
    ellipse(x, y, 30, 30);
}
