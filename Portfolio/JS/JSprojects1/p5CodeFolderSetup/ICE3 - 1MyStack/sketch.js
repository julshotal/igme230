/**
 * Julia Hotaling
 * IGME-102: ICE3 -1MyStack, 1/29/18
 * StackQMain.js Main driver to test MyStack and MyQueue classes
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */

let s1;
let num = 0;
let dir = 1;

function setup() {
    createCanvas(200, 360);
    colorMode(HSB);

    s1 = new MyStack(); //intializes a new MyStack object
    //s1.myPush(100);
    //let x = s1.myPop();
    //print(x);
}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    background(255);
    testStk();
}

function testStk() {
    let sLeng = s1.myLeng();
    if (sLeng >= 360) { //hue decreases when greater than 360
        dir = -1
    } else if (sLeng <= 0) { //hue increses when less than 0
        dir = +1
    }

    if (dir > 0) {
        s1.myPush(num); //goes up if greater than 0
        s1.display();
        num++;

        //changes box color as the thing ascends
        push();
        fill(0);
        stroke(0);
        text("up", 15, height / 2 - 5);
        stroke(0);
        fill(num, 100, 100);
        rect(15, height / 2, 20, 20);
        pop();
    } else {
        num = s1.myPop(); //goes down if less than 0
        s1.display();
        num--;

        //changes box color as the thing descends
        push();
        fill(0);
        stroke(0);
        text("down", 150 + 15, height / 2 - 5);
        stroke(0);
        fill(num, 100, 100);
        rect(150 + 20, height / 2, 20, 20);
        pop();
    }
}
