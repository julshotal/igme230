/**
 * Julia Hotaling
 * IGME-102: ICE3 -2MyStack2, 1/31/18
 * StackQMain.js Main driver to test MyStack and MyQueue classes
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */

//myStack variables
let s1;
let num = 0;
let dir = 1;

let q1;

function setup() {
    createCanvas(200, 360);
    colorMode(HSB);

    s1 = new MyStack(); //intializes a new MyStack object
    q1 = new MyQ(); //intializes new MyQ object

}

/**
 * draw : Loops forever; called automatically
 * Summarize code that you add
 */
function draw() {
    background(255);
    //testStk(); //tests the stack
    testQ(); //tests the queue
}

function testStk() { //tests the stack
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
        fill(0);
        stroke(0);
        text("up", 15, height / 2 - 5);
        stroke(0);
        fill(num, 100, 100);
        rect(15, height / 2, 20, 20);
    } else {
        num = s1.myPop(); //goes down if less than 0
        s1.display();
        num--;

        //changes box color as the thing descends
        fill(0);
        stroke(0);
        text("down", 150 + 15, height / 2 - 5);
        stroke(0);
        fill(num, 100, 100);
        rect(150 + 20, height / 2, 20, 20);
    }
}

function testQ() { //tests the queue
    let qLeng = q1.myLeng();
    if (qLeng >= 360) { //hue decreases when greater than 360
        dir = -1
    } else if (qLeng <= 0) { //hue increases when less than 0
        dir = +1
    }

    if (dir > 0) {
        q1.myEnqueue(num); //goes up if greater than 0
        q1.display();
        num++;

        //changes box color as the thing ascends
        push();
        fill(0);
        stroke(0);
        text("Back", 15, height / 2 - 5);
        stroke(0);
        fill(num, 100, 100);
        rect(15, height / 2, 20, 20);
        pop();
    } else {
        let hue = q1.myDequeue(); //goes down if less than 0
        q1.display();
        num--;

        //changes box color as the thing descends
        push();
        fill(0);
        stroke(0);
        text("Front", 150 + 15, height / 2 - 5);
        stroke(0);
        fill(hue, 100, 100);
        rect(150 + 20, height / 2, 20, 20);
        pop();
    }
}
