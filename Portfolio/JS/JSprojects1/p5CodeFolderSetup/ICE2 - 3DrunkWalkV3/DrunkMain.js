/**
 * Julia Hotaling
 * IGME-102: ICE2 - 3DrunkWalkV3, 1/26/18
 * using an array for the Drunkards
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */

//let nDrunks = 5;
//let dArr = [nDrunks]; 
let dArr = [];

function setup() {
    //put setup code here
    createCanvas(600, 400);
    background(0);
    colorMode(HSB); // hue, saturation, brightness 

    for (let i = 0; i < Math.floor(random(5, 20)); i++) {
        //dArr[i] = new Drunkard(random(1, 15));
        dArr.push(new Drunkard(random(1, 15))); //add new drunkards to the array
    }
}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    for (let i = 0; i < dArr.length; i++) {
        dArr[i].stagger();
    }
}

function mousePressed() {
    for (let i = 0; i < dArr.length; i++) {
        dArr[i].jump2Mouse(); //drunkards jump to where mouse is clicked
    }
}

function keyTyped() {
    if (key == 'c') {
        background(0); //clears screen when c is pressed
    } else if (key == ' ') {
        for (let i = 0; i < dArr.length; i++) {
            dArr[i].toggleMove(); //space bar stops movement
        }
    } else if (key == "+") {
        dArr.push(new Drunkard(random(1, 15))); //+ key adds more drunkards on the screen
    }
}
