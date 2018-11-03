/**
 *Julia Hotaling
 *9 - 2HueGrid0 - 3/21/18
 * Create a gird of flashing colors that is adjustable using DOM libraries to create buttons * and sliders
 **/
"use strict"

//global variables
let hueVal; //global 2D array of hue values
let cellSize = 10; //cellsize for each square in the grid
let maxDev = 10; //maximum deviation for hue values in the grid
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

function setup() {
    cnv = createCanvas(400, 300);
    cnv.position(180, 20); //sets canvas position 
    colorMode(HSB);
    background(100);
    noStroke();

    stBut = createButton("Stroke on/Off"); //creates button
    stBut.position(180, height + 30);
    stBut.mousePressed(stTogg); //when the button is pressed, the stroke toggle function is called

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
    resetBut.position(310, height + 30);
    resetBut.mousePressed(reset); //when the mouse is pressed the reset function is called to reset the cell size to the slider value

    patSelect = createSelect(); //creates a dropdown menu
    patSelect.position(20, 170);
    patSelect.option('Hyperbolic'); //hyperbole pattern option
    patSelect.option('Striped'); //rainbow stripes option
    patSelect.option('Random'); //random pixelated pattern option
    patSelect.changed(reset); //calls the reset function on selection 

    reset();
}


function reset() {

    cellSize = clSzSlider.value(); //sets cellsize to the slider value
    background(100);

    //calculate row and column lengths using the canvas dimensions and cellsize
    let rowLeng = Math.floor(width / cellSize);
    let colLeng = Math.floor(height / cellSize);

    hueVal = [];

    for (let i = 0; i < rowLeng; i++) {
        hueVal[i] = [];
        for (let j = 0; j < colLeng; j++) {
            
            let val = patSelect.value();
            let scale = 360 / (rowLeng + colLeng); //scale to multiply by for the striped pattern
            
            switch (val) { //based on the pattern chosen in the drop down menu, the grid is reset in that pattern. Hyperbolic is automaticall picked at beginning
                case 'Hyperbolic':
                    hueVal[i][j] = (i * j) % 360; //formula for a hyperbole 
                    break;
                case 'Striped':
                    hueVal[i][j] = ((i + j) * scale) % 360; //normalize the hue value to save graphics card stress, it would have to normalize the hue value but we can just do it here
                    break;
                case 'Random':
                    hueVal[i][j] = random(360);
                    break;
            }
        }
    }
}

function draw() {

    maxDev = mdSlider.value(); //sets the maximum deviation to the slider's value, which returns the number and controls how fast the 'pixels' move 
    mdSliLabel.html("Max Dev:  " + Math.round(mdSlider.value())); //updates the label of the max dev slider to show current max deviation value

    clSzLabel.html("Cell Size:  " + (clSzSlider.value())); //updates the label of the cell size  slider to show current cell size value

    satSliderLbl.html("Saturation:  " + (satSlider.value())); //updates the label of the saturation slider to show current saturation value
    satVal = satSlider.value(); //sets the saturation slider's value to a variable which is put into fill to continously update the saturation value

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
                fill(hueVal[i][j], satVal, 100);
                rect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }

}

function stTogg() { //toggles the stroke variable between false and true
    strokeOn = !strokeOn;
}
