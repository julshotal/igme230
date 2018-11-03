/**
 * MyStack class - by Julia Hotaling
 * Implements a stack using an internal Array (stkAra)
 * Standard operators are one-liners from the Array class
 */

"use strict";
class AvStack {
    constructor() {
        // Create Array to store items on the MyStack
        this.stkAra = [];
    }

    myPush(item) {
        // New items end up at the end of the array
        this.stkAra.push(item);
    }

    myPop() {
        // Returns and deletes last item from array
        return this.stkAra.pop();
    }

    myLeng() {
        // Use the length attribute
        return this.stkAra.length;
    }

    myClear() {
        this.stkAra = []; //clears screen by making new array
    }

    /* Display all the items in the array as lines growing
     * up from the bottom of the window.  The value in the
     * array will be the hue value of the line & its y
     * coordinate on the window will map from its offset in
     * the array.
     * Lines are 100 pixels long in the center of window.
     */
    displayAll() { //displays objects
        for (let i = 0; i < this.stkAra.length; i++) {
            let brightN = 100 / this.stkAra.length * (i); //lowers the brightness on older objects
            this.stkAra[i].display(brightN);
        }
    }

    moveAll() { //moves all the objects
        for (let i = 0; i < this.stkAra.length; i++) {
            this.stkAra[i].move();
        }
    }
}
