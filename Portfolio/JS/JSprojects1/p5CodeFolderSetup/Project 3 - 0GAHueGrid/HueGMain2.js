/**
 *Julia Hotaling
 *Project 3 - 0 - 3/26/18
 * Create a class to house the hue grid
 **/
"use strict"

//global variables

let cnv; //canvas variable
let stBut; //button variable
let strokeOn = false; //stroke boolean 

let mdSlider; //slider variable
let mdSliLabel; //variable to label the max dev slider

let clSzSlider; //slider for cellsize
let clSzLabel; //label for cellsize slider

let resetBut; //reset button
let patSelect; //pattern select

let satSlider; //color saturation slider
let satSliderLbl; //label div for the saturation slider
let satVal; //global value for saturation

let colSelect; //global variable for color range selections
let colLbl; //color slider label
let strokeColSlct; //stroke color selection variable 

let hG; //HueGrid object


function setup() {
    cnv = createCanvas(400, 300);
    cnv.position(180, 20); //sets canvas position 
    colorMode(HSB);
    background(100);
    noStroke();

    stBut = createButton("Stroke on/Off"); //creates button
    stBut.position(180, height + 30);
    stBut.mouseClicked(stTogg); //when the button is pressed, the stroke toggle function is called

    mdSlider = createSlider(0, 50, 10, 0); //creates slider
    mdSlider.position(20, 20);
    mdSliLabel = createDiv("Max Dev:" + mdSlider.value()); //creates label using div for the max dev slider
    mdSliLabel.position(mdSlider.x + 2, mdSlider.y + 20); //ties label position to slider position

    clSzSlider = createSlider(2, 20, 10, 1); //creates slider fo cellsize (all values are whole numbers, no fractions!)
    clSzSlider.position(20, 65);
    clSzLabel = createDiv("Cell size: " + clSzSlider.value()); //labels the slider
    clSzLabel.position(clSzSlider.x + 2, clSzSlider.y + 20);

    satSlider = createSlider(5, 100, 50, 1); //slider to control the saturation of the 'pixels', minimum is 5 to prevent a completely white canvas
    satSlider.position(20, 110);
    satSliderLbl = createDiv("Saturation: " + satSlider.value()); //labels the slider
    satSliderLbl.position(satSlider.x + 2, satSlider.y + 20);

    resetBut = createButton("Reset"); //creates reset button
    resetBut.position(280, height + 30);
    resetBut.mouseClicked(reset); //when the mouse is pressed the reset function is called to reset the cell size to the slider value

    patSelect = createSelect(); //creates a dropdown menu
    patSelect.position(20, 215);
    patSelect.option('Hyperbolic'); //hyperbole pattern option
    patSelect.option('Striped'); //rainbow stripes option
    patSelect.option('Random'); //random pixelated pattern option
    patSelect.changed(reset); //calls the reset function on selection 

    colSelect = createSlider(50, 360, 360, 5); //creates slider for color range with a min of 50 and max of 360
    colSelect.position(20, 155);
    colLbl = createDiv("Color Range: " + colSelect.value()); //labels the slider
    colLbl.position(colSelect.x + 2, colSelect.y + 20);

    strokeColSlct = createRadio(); //creates radio buttons
    strokeColSlct.position(350, height + 30);
    strokeColSlct.option('black'); //stroke is black
    strokeColSlct.option('white'); //stroke is white

    hG = new HueGrid();
    reset();
}

function reset() {
    hG.reset();
}

function draw() {
    hG.display();
}

function stTogg() { //toggles the stroke variable between false and true
    hG.strokeTogg();
}
