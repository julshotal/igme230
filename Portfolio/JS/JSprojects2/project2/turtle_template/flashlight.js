class Flashlight {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.size = 300;
        this.fillC = color(255, 255, 102, 65);
    }

    //draws the flashlight
    display() {
        fill(this.fillC);
        ellipse(this.x, this.y, this.size, this.size);
    }

    //moves the flashlight in all 4 directions
    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

}
