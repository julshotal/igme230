/**
 *Julia Hotaling
 *Project 3 - 0 - 3/26/18
 * Create a class to house the hue grid
 **/
"use strict"
class HueGrid {
    constructor() {
        this.hueVal; //global 2D array of hue values
        this.cSize = 10; //cellsize for each square in the grid
        this.maxDev = 10; //maximum deviation for hue values in the grid
        
        this.reset();
    }

    reset() {

        this.cSize = clSzSlider.value(); //sets cellsize to the slider value
        background(100);

        //calculate row and column lengths using the canvas dimensions and cellsize
        let rowLeng = Math.floor(width / this.cSize);
        let colLeng = Math.floor(height / this.cSize);

        this.hueVal = [];

        for (let i = 0; i < rowLeng; i++) {
            this.hueVal[i] = [];
            for (let j = 0; j < colLeng; j++) {

                let colVal = colSelect.value(); //sets the maximum number for color range
                let val = patSelect.value();
                let scale = 360 / (rowLeng + colLeng); //scale to multiply by for the striped pattern

                switch (val) { //based on the pattern chosen in the drop down menu, the grid is reset in that pattern. Hyperbolic is automaticall picked at beginning
                    case 'Hyperbolic':
                        this.hueVal[i][j] = (i * j) % colVal; //formula for a hyperbole 
                        break;
                    case 'Striped':
                        this.hueVal[i][j] = ((i + j) * scale) % colVal; //normalize the hue value to save graphics card stress, it would have to normalize the hue value but we can just do it here
                        break;
                    case 'Random':
                        this.hueVal[i][j] = random(colVal);
                        break;
                }
            }
        }
    }

    display() {

        this.maxDev = mdSlider.value(); //sets the maximum deviation to the slider's value, which returns the number and controls how fast the 'pixels' move 
        mdSliLabel.html("Max Dev:  " + Math.round(mdSlider.value())); //updates the label of the max dev slider to show current max deviation value

        clSzLabel.html("Cell Size:  " + (clSzSlider.value())); //updates the label of the cell size  slider to show current cell size value

        satSliderLbl.html("Saturation:  " + (satSlider.value())); //updates the label of the saturation slider to show current saturation value
        satVal = satSlider.value(); //sets the saturation slider's value to a variable which is put into fill to continously update the saturation value

        colLbl.html("Color Range: " + (colSelect.value()))

        if (strokeOn) { //toggles the stroke between white and no stroke
            let strokeVal = strokeColSlct.value(); //whether stroke is white or black 
            stroke(strokeVal);
        } else {
            noStroke();
        }

        for (let i = 0; i < this.hueVal.length; i++) {
            for (let j = 0; j < this.hueVal[i].length; j++) {
                this.hueVal[i][j] = this.hueVal[i][j] + random(-this.maxDev, this.maxDev);

                //keeps the hue value within the 0-360 range
                if (this.hueVal[i][j] > 360) {
                    this.hueVal[i][j] -= 350;
                } else if (this.hueVal[i][j] < 0) {
                    this.hueVal[i][j] += 360;
                } else {
                    fill(this.hueVal[i][j], satVal, 100);
                    rect(i * this.cSize, j * this.cSize, this.cSize, this.cSize);
                }
            }
        }
    }

    strokeTogg() { //turns stroke on and off
        strokeOn = !strokeOn;
    }
}
