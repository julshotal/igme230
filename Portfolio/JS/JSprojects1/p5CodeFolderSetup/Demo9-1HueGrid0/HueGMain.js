/**
 *Julia Hotaling
 *9HueGrid0 - 3/19/18
 **/
"use strict"

let hueVal; //global 2D array of hue values
let cellSize = 10;
let maxDev = 10;
let cnv; //canvas variable
let stBut; //button variable
let strokeOn = false; //stroke boolean 

function setup() {
    cnv = createCanvas(400, 300);
    cnv.position(20, 80); //sets canvase position 
    colorMode(HSB);
    background(100);
    noStroke();
    stBut = createButton("Stroke on/Off"); //creates button
    stBut.position(300, 30);
    stBut.mousePressed(stTogg); //when the button is pressed, the stroke toggle function is called

    let rowLeng = Math.floor(width / cellSize);
    let colLeng = Math.floor(height / cellSize);

    hueVal = [];

    for (let i = 0; i < rowLeng; i++) {
        hueVal[i] = [];
        for (let j = 0; j < colLeng; j++) {
            //hueVal[i][j] = random(360);
            //hueVal[i][j] = ((i + j) * 15) % 360; //normalize the hue value to save graphics card stress, it would have to normalize the hue value but we can just do it here
            hueVal[i][j] = (i * j) % 360; //formula for a hyperbole 
        }
    }
}

function draw() {

    if (strokeOn) { //toggles the stroke between white and no stroke
        stroke(100);
    } else {
        noStroke();
    }

    for (let i = 0; i < hueVal.length; i++) {
        for (let j = 0; j < hueVal[i].length; j++) {
            hueVal[i][j] = hueVal[i][j] + random(-maxDev, maxDev);

            //keeps the hue value within the 0-360 range
            if (hueVal[i][j] > 360) {
                hueVal[i][j] -= 350;
            } else if (hueVal[i][j] < 0) {
                hueVal[i][j] += 360;
            } else {
                fill(hueVal[i][j], 50, 100);
                rect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }

}

function stTogg() { //toggles the stroke variable between false and true
    strokeOn = !strokeOn;
}
