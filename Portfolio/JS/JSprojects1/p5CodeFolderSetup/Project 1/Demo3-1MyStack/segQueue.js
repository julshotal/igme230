/**
 * SegQueue class - by Julia Hotaling
 * Creates a queue of segments and their movement
 */

"use strict";

class SegQueue {

    constructor() { //intializes an array
        this.cArr = [];
    }

    myEnqueue(item) { //pushes a new item 
        this.cArr.push(item);
    }

    myDequeue() { //removes first item
        return this.cArr.shift();
    }

    myLeng() { //returnes queue length
        return this.cArr.length;
    }

    displayAll() { //displays queue of segments
        if (this.cArr.length > 0) {
            for (let i = 0; i < this.cArr.length; i++) {
                this.cArr[i].display();
                 //console.log(this.cArr[0].x);
            }
        }
    }

    myClear() { //clears the array
        this.cArr = [];
    }

    moveAll(xTarg, yTarg, speed) {

        //console.log(this.cArr.length);
        for (let i = this.cArr.length - 1; i > 0; i--) {

            let newX = this.cArr[i - 1].x;
            let newY = this.cArr[i - 1].y;

            this.cArr[i].move(newX, newY);
        }

        if (mouseX < this.cArr[0].x) {
            this.cArr[0].x = this.cArr[0].x - speed;
        } else {
            this.cArr[0].x = this.cArr[0].x + speed;
        }

        if (mouseY < this.cArr[0].y) {
            this.cArr[0].y = this.cArr[0].y - speed;
        } else {
            this.cArr[0].y = this.cArr[0].y + speed;

        }
    }
}

