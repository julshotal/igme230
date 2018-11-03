/**
 * Centipede class - by Julia Hotaling
 * Implements a queue of segments using the segQueue class
 * Allows a centipede to be initialized, grown, shrunk, and * cleared
 */


"use strict";
class Centipede {
    constructor() {
        this.segQ = new SegQueue();
        this.cSpeed = 2;
        this.initL = 5;
    }

    display() {
        if (this.segQ.myLeng() > 0) {
            this.segQ.displayAll();
        }
    }

    init(x, y) {
        //intialize a queue of 5 segments to being the centipeded
        if (this.segQ.myLeng() == 0) {
            for (let i = 0; i < this.initL; i++) {
                this.segQ.myEnqueue(new Segment(x, y));
            }
        }
    }

    move(x, y) {
        if (this.segQ.myLeng() > 0) {
            this.segQ.moveAll(x, y, this.cSpeed);
        }
    }


    grow(x, y) {
        //if the centipdede is greater than 0, 5 more segments are added to the end
        if (this.segQ.myLeng() > 0) {
            for (let i = 0; i < 5; i++) {
                let x = this.segQ[i - 1];
                let y = this.segQ[i - 1];

                this.segQ.myEnqueue(new Segment(x, y));
            }
        }
    }

    shrink() {
        //five segments are removed from the front of the centipede
        for (let i = this.initL; i > 0; i--) {
            this.segQ.myDequeue();
        }
    }

    clear() {
        this.segQ.myClear();
    }

}
