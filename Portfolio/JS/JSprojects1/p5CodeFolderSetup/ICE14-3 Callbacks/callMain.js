/**
 * Julia Hotaling
 * ICE callbacks 14/25/18
 * Add another function to be called by the repeat fun function
 **/
"use strict"

//button variables
let splatBt;
let linesBt;
let extraBt;

//new location variables
let xLoc;
let yLoc;

//hue array
let hues = [];

function setup() {
    createCanvas(400, 300);
    colorMode(HSB);
    noStroke();
    background(0);

    splatBt = createButton("Splat!"); //creates the splat button
    splatBt.position(width + 20, 20);
    splatBt.mouseClicked(setLoc);

    linesBt = createButton("Do Stuff"); //creates the do stuff button
    linesBt.position(width + 20, 60);
    linesBt.mouseClicked(doStuff);

    extraBt = createButton("More Stuff"); //creates the do stuff button
    extraBt.position(width + 20, 100);
    extraBt.mouseClicked(moreStuff);


    for (let i = 0; i < 120; i++) { //pushes the hues into the array up to 120
        hues.push(i * 3);
    }
}

function draw() {
    alterHues();
    drawDisk();
}

//randomly generate a new x and a new y location
function setLoc() {
    xLoc = random(60, width - 60);
    yLoc = random(60, height - 60);
}

function drawDisk() {
    hues.forEach(drawOne); //runs through every item in the hue array as a parameter in the drawOne function
}

//draws the ellipses for the splats, hue is passed in via the forEach method
function drawOne(hue, i) {
    let index = hues.length - i - 1;
    fill(hue, 100, 100);
    ellipse(xLoc, yLoc, index, index);
}

//runs through the rainbow in the hues array
function alterHues() {
    for (let i = 0; i < hues.length; i++) {
        hues[i] = (hues[i] + 1) % 360;
    }
}

//call two repeat functions for the line drawing function and the box drawing function when the Do Stuff button is pressed
function doStuff() {
    stroke(random(360), 100, 100);
    repeatFn(10, doLine);
    repeatFn(5, doBox);
}

//repeated the function funTime 20 times each time the More Stuff button is pressed
function moreStuff() {
    repeatFn(20, funTime);
}

//creates a line
function doLine() {
    line(random(width), random(height), random(width), random(height));
}

//creates a box
function doBox() {
    noStroke();
    fill(random(360), 100, 100, .5);
    rect(random(width / 2), random(height / 2), random(width / 2), random(height / 2));
}

//creates lines radiating out from 0, 0
function funTime() {
    stroke(random(360), 100, 100);
    strokeWeight(1);

    line(0, 0, random(width), random(height));
}

//repeat function, passes in how many time to repeat in n and the function to be "called back" multiple times
function repeatFn(n, callback) {
    for (let i = 0; i < n; i++) {
        callback();
    }
}
