/**
 *Julia Hotaling
 *Project 3 - 4 - 4/16/18
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

let genObj; //global genetics object
let mutationBut; //mutation button
let crossBut; //crossover button

let selectBut; //selection button


function setup() {
    cnv = createCanvas(960, 720);
    cnv.position(0, 20); //sets canvas position 
    colorMode(HSB);
    background(100);

    mdSlider = createSlider(0, 50, 10, 0); //creates max deviation slider
    mdSlider.position(20, 35);
    mdSliLabel = createDiv("Max Dev:" + mdSlider.value()); //creates label using div for the max dev slider
    mdSliLabel.position(mdSlider.x + 2, mdSlider.y + 20); //ties label position to slider position

    satSlider = createSlider(5, 100, 70, 1); //slider to control the saturation of the 'pixels', minimum is 5 to prevent a completely white canvas
    satSlider.position(200, 35);
    satSliderLbl = createDiv("Saturation: " + satSlider.value()); //labels the slider
    satSliderLbl.position(satSlider.x + 2, satSlider.y + 20);

    resetBut = createButton("Reset"); //creates reset button
    resetBut.position(905, 45);
    resetBut.mouseClicked(reset); //when the mouse is pressed the reset function is called to reset all the huegrids on the canvas

    mutationBut = createButton("Mutate"); //creates mutation button
    mutationBut.position(815, 45);
    mutationBut.mouseClicked(mutation); //when the mouse is pressed the mutate function is called to flip a bit in one huegrid

    crossBut = createButton("Crossover"); //creates crossover button
    crossBut.position(705, 45);
    crossBut.mouseClicked(xOver); //when the mouse is pressed the crossover function is called to split two of the chromosomes and cross them over with each other to create a new one

    selectBut = createButton("Selection"); //creates selection button
    selectBut.position(605, 45);
    selectBut.mouseClicked(selection); //when the mouse is pressed the selection function is called to do tournament selection to select two huegrids to be bred 

    genObj = new Genetics(9, 9); //new Genetics object 


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
        let newChrom = genObj.newChrom();
        hueGrids[i] = new HueGrid(newChrom, 20 + ((i % 3) * 20) + 300 * (i % 3), (Math.floor(i / 3) * 220 + 80), 300, 200);
        genObj.insertNew(newChrom, 0, i);
    } //array that creates 9 HueGrid objects in rows of 3


}

//function to run the reset method when the reset button is pressed
function reset() { 
    for (let i = 0; i < 9; i++) {
        hueGrids[i].reset(genObj.newChrom()); //resets all 9 HueGrids(called when reset button is pressed
    }
}

//runs the mutation method when the mutation button is pressed
function mutation() {
    let newChrom = genObj.mutate(hueGrids[0].chrom); //mutate the chromosome of the first position huegrid
    hueGrids[0].reset(newChrom) //reset the huegrid with the new mutation

    console.log(hex(newChrom));

}

//runs the crossover method when the crossover button is pressed
function xOver() {
    let newChrom = genObj.crossOver(hueGrids[Math.floor(random(0, 8))].chrom, hueGrids[Math.floor(random(0, 8))].chrom); //call the crossover method with two random parents from the huegrids array
    hueGrids[0].reset(newChrom); //reset the first position huegrid with the new child created from crossover

    console.log(hex(newChrom));
}

//runs the selection method when the selection button is pressed
function selection() {
    let newChrom = genObj.select(); //chromosome selected using the selection method

    hueGrids[0].reset(newChrom); //resets huegrid 0 with the new chromosome picked through tournament style selection
    genObj.insertNew(newChrom, 0, 0); //inserts new chromsome into the genetics chromosome array in the 0 position
    
    console.log(hex(newChrom));

}

function draw() {

    mdSliLabel.html("Max Dev:  " + Math.round(mdSlider.value())); //updates the label of the max dev slider to show current max deviation value


    satSliderLbl.html("Saturation:  " + (satSlider.value())); //updates the label of the saturation slider to show current saturation value
    satVal = satSlider.value(); //sets the saturation slider's value to a variable which is put into fill to continously update the saturation value


    for (let i = 0; i < 9; i++) { //calls the display for all 9 HueGrids
        hueGrids[i].display();
    }
}

//uses the + and - keys to increase or decrease the fitness values
function keyTyped() {
    for (let i = 0; i <= 8; i++) {
        if (hueGrids[i].mouseOver() == true && key == '+') {
            genObj.bumpFitness(i, 1);
        } else if (hueGrids[i].mouseOver() == true && key == '-') {
            genObj.bumpFitness(i, -1);
        }
    }
}
