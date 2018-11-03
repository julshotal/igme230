/**
 *Julia Hotaling
 *4AvatarStack - 2/5/18
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
let a1;
let avS; // A MyStack to play with

function setup() {
    // Window 360 tall to map to Hue values in HSB easily
    createCanvas(600, 400);
    colorMode(HSB);

    //Create the actual MyStack object
    avS = new AvStack();
    a1 = new Avatar();

}

function draw() {
    background(0); // Clear canvas to white
    a1.move(); //moves inital avatar
    a1.display(); //displays inital avatar

    avS.moveAll(); //moves additonal avatars
    avS.display(); //displays the avatar stack
}

function keyTyped() {
    if (key == 'a') { //adds a new object to the array
        avS.myPush(new Avatar());
    }
    
     if (key == 'o') { //adds a new oval object to the array
        avS.myPush(new Oval());
    }
    
    if (key == 'b') { //adds a new box object to the array
        avS.myPush(new Box());
    }
    
     if (key == 't') { //adds a new tri object to the array
        avS.myPush(new Tri());
    }
    
     if (key == 'p') { //adds a new tri object to the array
        avS.myPush(new Arc());
    }

    if (key == '-') { //removes one object from the array
        avS.myPop();
    }

    if (key == 'c') { //clears the array
        avS.myClear();
    }
}
