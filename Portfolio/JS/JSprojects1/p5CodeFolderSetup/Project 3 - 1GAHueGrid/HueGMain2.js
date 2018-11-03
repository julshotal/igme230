/**
 *Julia Hotaling
 *Project 3 - 1 - 3/26/18
 * Add slider capabilties to the chromosome in the HueGrid class
 **/
"use strict"

//global variables

let cnv; //canvas variable
let stBut; //button variable
let strokeOn = false; //stroke boolean 

let mdSlider; //slider variable
let mdSliLabel; //variable to label the max dev slider

let resetBut; //reset button
let patSelect; //pattern select

let satSlider; //color saturation slider
let satSliderLbl; //label div for the saturation slider
let satVal; //global value for saturation

let hG; //HueGrid object


function setup() {
    cnv = createCanvas(400, 300);
    cnv.position(180, 20); //sets canvas position 
    colorMode(HSB);
    background(100);

    mdSlider = createSlider(0, 50, 10, 0); //creates slider
    mdSlider.position(20, 20);
    mdSliLabel = createDiv("Max Dev:" + mdSlider.value()); //creates label using div for the max dev slider
    mdSliLabel.position(mdSlider.x + 2, mdSlider.y + 20); //ties label position to slider position

    satSlider = createSlider(5, 100, 50, 1); //slider to control the saturation of the 'pixels', minimum is 5 to prevent a completely white canvas
    satSlider.position(20, 110);
    satSliderLbl = createDiv("Saturation: " + satSlider.value()); //labels the slider
    satSliderLbl.position(satSlider.x + 2, satSlider.y + 20);

    resetBut = createButton("Reset"); //creates reset button
    resetBut.position(280, height + 30);
    resetBut.mouseClicked(reset); //when the mouse is pressed the reset function is called to reset the cell size to the slider value

    hG = new HueGrid(Math.floor(random(512))); //create new HueGrid object
}

function reset() {
    hG.reset(Math.floor(random(512)));
}

function draw() {
    hG.display();
}
