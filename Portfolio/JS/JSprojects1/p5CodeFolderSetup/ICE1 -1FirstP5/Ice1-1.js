/**
 * Julia Hotaling
 * IGME-102: ICE1-1, 1/17/18
 * ellipses that draw themselves along mouse movement, screen can be cleared when clicked
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    //put setup code here
    createCanvas(400, 300);
    background(0);

}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    //put drawing code here
    noStroke();
    fill(random(20, 255), random(0, 10), random(50, 230));
    ellipse(mouseX, mouseY, 25, 25);
    
}

function mouseClicked() {
    background(0);
}