"use strict";
/**
 * Project 2, Phase 2: Frequency Visualization - by Julia Hotaling
 * Uses the p5.js NumberDict class to count the frequency of words
 * in a text file.  The counts are visualized in an animation that
 * counts how many times a word is used and visualizes it in a wordcloud
 *
 * Uses a state variable to control the visualization method, which
 * Illustrates another use for the Object gizmos in JavaScript.
 */

let corpAra; // Array of strings to hold the text file (corpus)
let itsHim; //variable to store the image file of Barry B Benson
let wFreq; // Character Frequency object
let lineNum = 0; // Offset into corpAra

//let fileName = "HaikuFri.txt";
//let fileName = "p5Survival.txt";
//let fileName = "p5StyleGuide.txt";
//let fileName = "CharFreq.js";
let fileName = "hateMail.txt"; //Bee Movie script
let barryB = "BarryB.png"; //image of Barry B Benson from the Bee Movie

// Set up an enumerated data type (enum) for the program's state
const StVal = {
    IDLE: 0, // No visualization is currently rendering
    CLOUD: 1, // The wordcloud vizualization is currently rendering
}

let state = StVal.IDLE;

function preload() {
    // Read the file into an array of strings, one line per string
    corpAra = loadStrings(fileName);
    itsHim = loadImage(barryB); //load image of BarryB
}

function setup() {
    createCanvas(560, 800);
    colorMode(HSB);
    background(0);
    frameRate(10); // Slow it down some
    textFont("monospace"); // All characters are the same width
    wFreq = new WordFreq(); // Create the Character Frequency object
}

function draw() {
    // Only draw anything if we're not IDLE
    if (state != StVal.IDLE) {
        // Haven't finished to file yet
        if (lineNum < corpAra.length) {
            background(0);
            image(itsHim, width - 150, height - 100);//Barry B image in the lower screen
            // Count characters in this line
            wFreq.countLine(corpAra[lineNum]);
            // Visualize counters so far using method indicated by state
            wFreq.display(state);
            // Next line for next time
            lineNum++;
        } else
            // Finished the file, so now we're IDLE
            state = StVal.IDLE;
    }
}

function keyTyped() {
    switch (key) {
        case 'l':
            if (state == StVal.IDLE) {
                state = StVal.CLOUD;
                wFreq.reInit();
                lineNum = 0;
                background(0);
            }
            break;
        case 'd':
            wFreq.dump(); // For debugging purposes
            break;
    }
}
