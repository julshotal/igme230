/**
 *Julia Hotaling
 *Project1 - 2/9/18
 *implements a stack of different shape objects and lowers the brightness on older objects


 * Demo3-1 Stack and Queue example - by Al Biles
 * Main driver to test MyStack and MyQueue classes
 * This first version implements & tests the MyStack class
 *
 * ICE 3-1 is to Display a square whose hue value is
 * the value peing pushed onto or popped from the stack.
 * Squares for pushed values should appear to the left
 * of the stack, and popped values should appear to the
 * right.
 */

"use strict";

let avS; // A MyStack to play with
let cent;

function setup() {
    // Window 360 tall to map to Hue values in HSB easily
    createCanvas(600, 400);
    colorMode(HSB);
    noiseDetail(3, 0.6); //configures Perlin noise to wander farther on canvas 

    //Create the actual MyStack object
    avS = new AvStack();
    cent = new Centipede();

}

function draw() {
    background(0); // Clear canvas to whiteS

    avS.moveAll(); //moves additonal avatars
    cent.move(mouseX, mouseY);


    avS.displayAll(); //displays the avatar stack
    cent.display();
}

function keyTyped() {
    switch (key) {
        case 'a': //adds a new object to the array
            avS.myPush(new Avatar());
            break;

        case 'o': //adds a new oval object to the array
            avS.myPush(new Oval());
            break;

        case 'b': //adds a new box object to the array
            avS.myPush(new Box());
            break;

        case 't': //adds a new tri object to the array
            avS.myPush(new Tri());
            break;

        case 'p': //adds a new tri object to the array
            avS.myPush(new myArc());
            break;

        case '-': //removes one object from the array
            avS.myPop();
            break;

        case 'c': //clears the arrays
            avS.myClear();
            cent.clear();
            break;
            
        case 'g': //grows the centipede by five
            cent.grow(mouseX, mouseY);
            break;

        case 's': //shortens the centipede by five
            cent.shrink();
            break;

        default:
            break;
    }
}

function mouseClicked() { //creates a centipede where the mouse is clicked
    cent.init(mouseX, mouseY);
}
