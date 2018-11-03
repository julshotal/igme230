class Drunkard {
    constructor() {
        this.xLoc = width / 2;
        this.yLoc = height / 2;
        this.maxDev = 10;
        this.hueVal = random(360);
        this.movement = true;
    }

    stagger() {
        //put drawing code here
        stroke(this.hueVal, 100, 100);
        //line(100, 200, 300, 400);

        if (this.movement == true) {
            this.newX = this.newCoord(this.xLoc, width);
            this.newY = this.newCoord(this.yLoc, height);
        }

        line(this.xLoc, this.yLoc, this.newX, this.newY);

        this.xLoc = this.newX;
        this.yLoc = this.newY;
        //% does modulus, which makes it wrap around. It's the remainder 
        this.hueVal = (this.hueVal + 5) % 360; //changes hue of line 

    }

    newCoord(oldC, limit) {
        let newC = oldC + random(-this.maxDev, this.maxDev);
        if (newC < 0) {
            newC = 0;
        } else if (newC >= limit) {
            newC = limit - 1;
        }

        return newC;
    }

    jump2Mouse() {
        this.xLoc = mouseX;
        this.yLoc = mouseY;
    }

    toggle() {
        if (this.movement == true){
            this.movement = false;  
        } else {
            this.movement = true;
        }
        
        return this.movement;
    }
}
