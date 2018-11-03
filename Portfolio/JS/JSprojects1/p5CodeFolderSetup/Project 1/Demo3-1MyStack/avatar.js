/* Avatar class -  Julia Hotaling
 * Base class for a hierarchy of shape-based avatars
 * Used in the AvStack class, which stores a collection 
 * of currently active avatars on the canvas.
 */


//added brightness variable to lower the brightness on older objects while new ones are displayed at full brightness
"use strict";
class Avatar {

    constructor() {
        this.xOff = random(100); //offset for noise
        this.xInc = 0.006; //increment for xOff
        this.x = noise(this.xOff) * width; //scale Perlin noise to width of canvas

        this.yOff = random(100);
        this.yInc = 0.006;
        this.y = noise(this.yOff) * height;
    }

    move() {
        this.xOff = this.xOff + this.xInc;
        this.x = noise(this.xOff) * width;

        this.yOff = this.yOff + this.yInc;
        this.y = noise(this.yOff) * height;
    }

    display() {
        stroke(100);
        strokeWeight(10);
        point(this.x, this.y);
    }
}

//new subclass to make ovals
class Oval extends Avatar {
    constructor() {
        super();
        this.horiz = random(30, 80);
        this.vert = random(20, 50);
        this.hueVal = random(360); //fill color
    }

    display(brightN) {
        noStroke();
        fill(this.hueVal, brightN, brightN);
        ellipse(this.x, this.y, this.horiz, this.vert);
    }
}

//new subclass to make boxes
class Box extends Oval {
    constructor() {
        super();
    }

    display(brightN) {
        noStroke(brightN);
        fill(this.hueVal, brightN, brightN);
        rect(this.x, this.y, this.horiz, this.vert);
    }
}

//new subclass to make triangles
class Tri extends Avatar {
    constructor() {
        super();
        this.x1 = random(10, 50);
        this.y1 = random(15, 55);
        this.x2 = random(25, 65);
        this.y2 = random(20, 60);
        this.hueVal = random(360);
    }

    display(brightN) {
        noStroke();
        fill(this.hueVal, brightN, brightN);
        triangle(this.x, this.y, this.x + this.x1, this.y + this.y1, this.x + this.x2, this.y + this.y2);
    }
}

//new subclass to make arcs
class myArc extends Oval {
    constructor() {
        super();
        this.pi1 = random(QUARTER_PI);
        this.pi2 = random(PI);
    }
    
    display(brightN) {
        
        noFill();
        //strokeWeight(random(10, 30));
        strokeWeight(15);
        stroke(this.hueVal, brightN, brightN);
        arc(this.x, this.y, this.horiz, this.vert, this.pi1, this.pi2);
    }
}