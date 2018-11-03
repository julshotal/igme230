class Eye {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.horiz = 10;
        this.vert = 5;
        this.iris = color(234, 196, 24);
        this.pupil = color(161, 98, 14);
    }

    //displays eyes
    display() {
        fill(this.iris);
        ellipse(this.x, this.y, this.horiz, this.vert);
        ellipse(this.x + 20, this.y, this.horiz, this.vert);

        fill(this.pupil);
        ellipse(this.x, this.y, this.horiz / 2, this.vert);
        ellipse(this.x + 20, this.y, this.horiz / 2, this.vert); 
    }
    
}
