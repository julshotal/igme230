class Ball {
    constructor(x, y, deltaX, deltaY, size, fillC) {
        this.x = x;
        this.y = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(3, 5);
        this.size = random(2, 10);
        this.fillC = color(115, 158, 224, random(40, 80));
    }

    //moves the circles
    move() {
        this.x += this.deltaX;
        this.y += this.deltaY;
    }

    //a slightly faster movement for blizzard
    moveFaster() {
        this.x += this.deltaX * 2;
        this.y += this.deltaY * 2;
    }

    //displays ellipses
    display() {
        fill(this.fillC);
        ellipse(this.x, this.y, this.size, this.size);
    }


    //wraps the snow around the screen
    wrap() {
        if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }

        if (this.x < -this.size / 2) {
            this.x = -this.size / 2;
        }

        if (this.y < -this.size / 2) {
            this.y = 0
        }

    }


}
