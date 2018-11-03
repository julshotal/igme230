/**
 * Segment class - by Julia Hotaling
 * Creates a singular segment and lays foundatin for the move * method
 */

"use strict";
class Segment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hueV = random(360);
        this.dia = 20;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        //draws the circles that make up the centipede's body
        fill(this.hueV, 100, 100);
        noStroke();
        ellipse(this.x, this.y, this.dia, this.dia);
    }
}
