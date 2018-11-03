/**
 *Julia Hotaling
 *Project 3 - 2 - 4/2/18
 * Create 9 HueGrids on a canvas
 **/
"use strict"

//global variables

let cnv; //canvas variable
let stBut; //button variable
let strokeOn = false; //stroke boolean that turns the stroke on when it's true 

let mdSlider; //slider variable
let mdSliLabel; //variable to label the max dev slider

let resetBut; //reset button
let patSelect; //pattern select

let satSlider; //color saturation slider
let satSliderLbl; //label div for the saturation slider
let satVal; //global value for saturation

let hueGrids; //HueGrid array


function setup() {
    cnv = createCanvas(960, 720);
    cnv.position(0, 20); //sets canvas position 
    colorMode(HSB);
    background(100);

    mdSlider = createSlider(0, 50, 10, 0); //creates max deviation slider
    mdSlider.position(20, 35);
    mdSliLabel = createDiv("Max Dev:" + mdSlider.value()); //creates label using div for the max dev slider
    mdSliLabel.position(mdSlider.x + 2, mdSlider.y + 20); //ties label position to slider position

    satSlider = createSlider(5, 100, 50, 1); //slider to control the saturation of the 'pixels', minimum is 5 to prevent a completely white canvas
    satSlider.position(200, 35);
    satSliderLbl = createDiv("Saturation: " + satSlider.value()); //labels the slider
    satSliderLbl.position(satSlider.x + 2, satSlider.y + 20);

    resetBut = createButton("Reset"); //creates reset button
    resetBut.position(905, 45);
    resetBut.mouseClicked(reset); //when the mouse is pressed the reset function is called to reset the cell size to the slider value


    hueGrids = []; //array for the 9 HueGrids

    //    hueGrids[0] = new HueGrid(Math.floor(random(512)), 20, 80, 300, 200);
    //    hueGrids[1] = new HueGrid(Math.floor(random(512)), 340, 80, 300, 200);
    //    hueGrids[2] = new HueGrid(Math.floor(random(512)), 660, 80, 300, 200);
    //    hueGrids[3] = new HueGrid(Math.floor(random(512)), 20, 300, 300, 200);
    //    hueGrids[4] = new HueGrid(Math.floor(random(512)), 340, 300, 300, 200);
    //    hueGrids[5] = new HueGrid(Math.floor(random(512)), 660, 300, 300, 200);
    //    hueGrids[6] = new HueGrid(Math.floor(random(512)), 20, 520, 300, 200);
    //    hueGrids[7] = new HueGrid(Math.floor(random(512)), 340, 520, 300, 200);
    //    hueGrids[8] = new HueGrid(Math.floor(random(512)), 660, 520, 300, 200);

    for (let i = 0; i < 9; i++) {
        hueGrids[i] = new HueGrid(Math.floor(random(512)), 20 + ((i % 3) * 20) + 300 * (i % 3), (Math.floor(i / 3) * 220 + 80), 300, 200);
    } //array that creates 9 HueGrid objects in rows of 3


}

function reset() { //resets all 9 HueGrids(called when reset button is pressed)
    for (let i = 0; i < 9; i++) {
        hueGrids[i].reset(Math.floor(random(512)));
    }
}

function draw() {
    for (let i = 0; i < 9; i++) { //calls the display for all 9 HueGrids
        hueGrids[i].display();
    }
}
