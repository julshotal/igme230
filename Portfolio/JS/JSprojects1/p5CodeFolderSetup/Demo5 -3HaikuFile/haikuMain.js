/**
 * Julia Hotaling
 * IGME-102: Demo5 - 3HaikuFile, 2/16/18
 * following the mouse demo
 */
"use strict"

let fileStAra;

function preload() { //loads in files before the setup function runs
    fileStAra = loadStrings("Haiku1.txt"); //pulls each line of the haiku as a string and puts them in an array
}

function setup() {
    createCanvas(600, 400);
    noStroke();
}


function draw() {
    background(0);
    let y;
    let x;
    let space; //space between lines

    //controls the vibration levels
    y = noise(random(.006, .05)) * height/2;
    x = noise(random(.006, .05)) * width/2;
    space = 10;

    //displays each line of the haiku
    for (let i = 0; i < fileStAra.length; i++) {
        textSize(20);
        fill(255);
        text(fileStAra[i], x, y + space);
        space += 20;
    }

}
