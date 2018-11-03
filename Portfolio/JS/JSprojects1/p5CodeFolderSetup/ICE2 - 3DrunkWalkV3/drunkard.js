class Drunkard {
    constructor(maxD) {
        this.xLoc = width / 2; //current location
        this.yLoc = height / 2;
        this.maxDev = maxD; //max deviation of a step
        this.hueVal = random(360); //current hue value
        this.movement = true; //whether or not to stagger
    }

    stagger() {
        //put drawing code here
        stroke(this.hueVal, 100, 100);
        //line(100, 200, 300, 400);

        //Javascript doesn't care about data types unless you use a triple equal sign(===)
        if (this.movement) { //already a boolean, don't compare to true or false
            let newX = this.newCoord(this.xLoc, width);
            let newY = this.newCoord(this.yLoc, height);

            line(this.xLoc, this.yLoc, newX, newY);

            this.xLoc = newX;
            this.yLoc = newY;
            //% does modulus, which makes it wrap around. It's the remainder 
            this.hueVal = (this.hueVal + 5) % 360; //changes hue of line 

        } //can encompass this whole area with the if statment
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

    toggleMove() { //toggles movement on and off 
        this.movement = !this.movement;
        //don't need an if statement here, just use ! to use "not" or "opposite"
    }
}
