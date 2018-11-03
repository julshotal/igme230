class Button {
    constructor(x, y, label) {
        //button parameters
        this.x = x;
        this.y = y;
        this.buttonWidth = 150;
        this.buttonHeight = 50;

        //button colors & text
        this.normalColor = color(102, 102, 255, 95);
        this.currentColor = this.normalColor;
        this.overColor = color(0, 0, 255);
        this.downColor = color(0, 0, 153);
        this.label = label;
    }

    //checks if mouse is in the button area
    checkWithin(x, y) {
        if (x > this.x && y > this.y && x < this.buttonWidth + this.x && y < this.buttonHeight + this.y) {
            return true;
        } else {
            return false;
        }
    }

    //draws the buttons with hover/down effects
    drawButton(x, y) {
        if (this.checkWithin(x, y) == true && mouseIsPressed == false) {
            this.currentColor = this.overColor;
            fill(this.currentColor);
            rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
            fill(255);
            textAlign(CENTER, CENTER);
            textSize(16);
            text(this.label, this.x, this.y, this.buttonWidth, this.buttonHeight);
        } else if (this.checkWithin(x, y) == true && mouseIsPressed == true) {
            this.currentColor = this.downColor;
            fill(this.currentColor);
            rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
            fill(255);
            textAlign(CENTER, CENTER);
            textSize(16);
            text(this.label, this.x, this.y, this.buttonWidth, this.buttonHeight);
        } else {
            this.currentColor = this.normalColor;
            fill(this.currentColor);
            rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
            fill(255);
            textAlign(CENTER, CENTER);
            textSize(16);
            text(this.label, this.x, this.y, this.buttonWidth, this.buttonHeight);
        }
    }

}
