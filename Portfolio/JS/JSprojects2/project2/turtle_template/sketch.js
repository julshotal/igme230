/* Julia Hotaling
    11/3/17
    Project 2 */
"use strict"

//buttons
var button1;

//snowfall array 
var snowGen;
snowGen = new Array();

//name prompt
var name;

//flashlight
var flashlight;
let light = false;
var buttonText = "flashlight on";

//snow settings
let flurry = true;

//background image
var img;
var owl;

//eyes
var eye1;
var eye2;
var eye3;
var eye4;
var eye5;
var eye6;
var eye7;

//background image
//both images draw by me
function preload() {
    img = loadImage("../images/snowForest.jpg");
    owl = loadImage("../images/owl.png");
}

function setup() {
    createCanvas(1050, 600);
    background(100);

    noStroke();

    //title message
    name = prompt("What is your name?");

    //creating the flashlight
    flashlight = new Flashlight(width / 2, height / 2);

    //eyes
    makeEyes();


}

function draw() {
    background(100);
    //background image and owl on tree 
    //both images draw by me
    image(img, 0, 0);
    image(owl, 490, 114);


    //owl makes noise when hovered over
    if (mouseX > 506 && mouseX < 590 && mouseY > 125 && mouseY < 274) {
        littleOwl();
    }

    //flashlight display
    if (light == true) {
        flashlight.display();
        buttonText = "flashlight off";
    } else {
        buttonText = "flashlight on";
    }

    //flashlight movement
    if (keyIsDown(UP_ARROW)) {
        flashlight.moveUp();
    }

    if (keyIsDown(DOWN_ARROW)) {
        flashlight.moveDown();
    }

    if (keyIsDown(RIGHT_ARROW)) {
        flashlight.moveRight();
    }

    if (keyIsDown(LEFT_ARROW)) {
        flashlight.moveLeft();
    }

    //drawing the buttons
    button1 = new Button(width - 1000, height - 100, buttonText);
    button1.drawButton(mouseX, mouseY);

    //title message
    lost();

    //snow effects 
    if (flurry == true) {
        snowFlurry();
    } else if (flurry == false) {
        snowBlizzard();
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        textStyle(ITALIC);
        textSize(25);
        text("It begins to snow harder", width / 2, height - 75);
        textStyle(NORMAL);
    }

    //eyes
    eyesAppear();

    //commands list
    menu();


}

//animates a light snow effect
function snowFlurry() {
    for (var n = 0; n < snowGen.length; n++) {
        snowGen[n].display();
        snowGen[n].move();
        snowGen[n].wrap();
    }

    if (snowGen.length > 100) {
        snowGen.splice(0, 1);
    } else {
        snowGen.push(new Ball(random(0, width), 0));
    }
}

//animates a heavier snow effect
function snowBlizzard() {
    for (var n = 0; n < snowGen.length; n++) {
        snowGen[n].display();
        snowGen[n].moveFaster();
        snowGen[n].wrap();
    }

    if (snowGen.length > 1500) {
        snowGen.splice(0, 1);
    } else {
        snowGen.push(new Ball(random(0, width), 0));
    }
}

//title message with prompt input
function lost() {
    fill(255);
    textAlign(CENTER);
    textSize(35);
    text(name + " is lost in the woods", width / 2, height - 535);
}

//controls the snow speed
function keyTyped() {
    if (key == 'b') {
        flurry = false;
    } else if (key == 'f') {
        flurry = true;
    }

}

//makes the sidebar menu
function menu() {
    fill(color(102, 102, 255, 95));
    rect(width - 1000, 50, 150, 400);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    textStyle(BOLD);
    text("Actions", width - 1000, 50, 155, 100);
    textSize(18);
    textStyle(NORMAL);
    text("Press 'f' for light snow", width - 1000, 50, 150, 260);
    text("Press 'b' for heavy snow", width - 1000, 150, 150, 260);
    text("Use arrows to move the flashlight", width - 1000, 200, 150, 360);
}

//turns flashlight on/off
function mouseClicked() {
    if (button1.checkWithin(mouseX, mouseY) == true) {
        light = !light;
    }
}

//owl noise text called when it's hovered over
function littleOwl() {
    fill(color(202, 202, 255, 95));
    textAlign(RIGHT);
    textSize(15);
    textStyle(ITALIC);
    text("Who?", 515, 136);
    textStyle(NORMAL);
}

//makes eyes appear when the flashlight runs over them
function eyesAppear() {
    if (dist(width / 2, height / 2, flashlight.x, flashlight.y) <= (flashlight.size / 2) - 10 && light == true) {
        eye1.display();
    }

    if (dist((width / 6) - 10, height / 4, flashlight.x, flashlight.y) <= (flashlight.size / 2) - 10 && light == true) {
        eye2.display();
    }

    if (dist((width / 5) - 10, height - 200, flashlight.x, flashlight.y) <= (flashlight.size / 2) - 10 && light == true) {
        eye3.display();
    }

    if (dist(width - 100, height / 2, flashlight.x, flashlight.y) <= (flashlight.size / 2) - 10 && light == true) {
        eye4.display();
    }

    if (dist(width - 150, height / 1.5, flashlight.x, flashlight.y) <= (flashlight.size / 2) - 10 && light == true) {
        eye5.display();
    }

    if (dist(width - 300, height / 3, flashlight.x, flashlight.y) <= (flashlight.size / 2) - 10 && light == true) {
        eye6.display();
    }

    if (dist(width - 670, height - 350, flashlight.x, flashlight.y) <= (flashlight.size / 2) - 10 && light == true) {
        eye7.display();
    }

}

//creation of eyes
function makeEyes() {
    eye1 = new Eye((width / 2) - 10, height / 2);
    eye2 = new Eye((width / 6) - 10, height / 4);
    eye3 = new Eye((width / 5) - 10, height - 200);
    eye4 = new Eye(width - 100, height / 2);
    eye5 = new Eye(width - 150, height / 1.5);
    eye6 = new Eye(width - 300, height / 3);
    eye7 = new Eye(width - 670, height - 350);
}
