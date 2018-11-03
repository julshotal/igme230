"use strict"

/* Character class -  Julia Hotaling
 * a dictonary class used to store a dictonary of characters generated from a * text file. Includes methods for which different graphics and animations * * * display depending on which of three different states the program is in
 */

class Chara {
    constructor() {
        //create and fill dictonary
        let aNum = 'a'.charCodeAt(0);

        //creates whitespace and misc in dictonary
        this.ctrs = createNumberDict('-', 0);
        this.ctrs.create('#', 0);

        //creates a-z in dictonary
        for (let i = 0; i < 26; i++) {
            let l = String.fromCharCode(i + aNum);
            this.ctrs.create(l, 0);
        }
    }

    countLine(lNum) {
        let sArr = lNum.split('');
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] >= 'a' && sArr[i] <= 'z') {
                //incremenet counter for each character
                this.ctrs.add(sArr[i], 1);

            } else if (sArr[i] == ' ') {
                //increment whitespace counter
                this.ctrs.add('-', 1);

            } else {
                //increment misc counter
                this.ctrs.add('#', 1);
            }
        }
    }

    display(state) {
        if (state == 0) {
            console.log("the state is 0"); //black screen
        } else if (state == 1) {
            console.log("the state is 1"); //histogram

            for (let i = 0; i < 26; i++) {

                //variables
                let tNum = 'a'.charCodeAt(0);
                let t = String.fromCharCode(i + tNum);

                //line of characters along the bottom
                noStroke()
                textSize(25);
                fill(i * 10, 100, 100);
                text(t, 10 + 19 * i, height - 10);

                //draws the bars for a-z
                stroke(i * 10, 100, 100);
                this.drawL(10 + 19 * i, height - 35, t);
            }
            //adds misc and whitespace to line of characters along the bottom
            text('#', 10 + 19 * 26, height - 10);
            text('-', 10 + 19 * 27, height - 10);

            //draws bars for misc. and whitespace characters
            this.drawL(10 + 19 * 26, height - 35, '#');
            this.drawL(10 + 19 * 27, height - 35, '-');

        } else if (state == 2) {
            console.log("the state is 2"); //letter cloud

            for (let i = 0; i < 26; i++) {

                //variables
                let tNum = 'a'.charCodeAt(0);
                let t = String.fromCharCode(i + tNum);
                let x = (i % 4) * 150 + 10; //gives you 0-3 for position 
                let y = (Math.floor(i / 4) * 100 + 150);

                //draws growing characters for a-z
                fill(i * 10, 100, 100, .8);
                this.drawClouds(t, x, y, this.ctrs.get(t));
            }

            //draws the growing characters for whitespace and misc
            this.drawClouds('-', (2 % 4) * 150 + 10, (Math.floor(26 / 4) * 100 + 150), this.ctrs.get('#'));

            this.drawClouds('#', (3 % 4) * 150 + 10, (Math.floor(27 / 4) * 100 + 150), this.ctrs.get('#'));

        } else if (state == 3) {
            console.log("the state is 3"); //dealers choice
            //each character is pushed forward, the more of that character there is the farther forward it goes

            for (let i = 0; i < 26; i++) {

                //variables
                let tNum = 'a'.charCodeAt(0);
                let t = String.fromCharCode(i + tNum);
                let x = 10; //gives you 0-3 for position 
                let y = 20 + 18 * i;

                //display and move text graphics
                fill(i * 10, 100, 100);
                this.shakeIt(t, x, y, this.ctrs.get(t));
            }

            //display and move whitespace/misc characters
            //whitespace has a tendency to fly off the page due to how many times it is used
            this.shakeIt('-', 10, 20 + 18 * 26, this.ctrs.get('-'));
            this.shakeIt('#', 10, 20 + 18 * 27, this.ctrs.get('#'));
        }
    }

    //reintializes the counter each time a new state is called
    reInit() {
        this.ctrs.clear();

        let aNum = 'a'.charCodeAt(0);
        this.ctrs = createNumberDict('-', 0);
        this.ctrs.create('#', 0);

        for (let i = 0; i < 26; i++) {
            let l = String.fromCharCode(i + aNum);
            this.ctrs.create(l, 0);
        }

    }

    dump() {
        this.ctrs.print(); //prints out the count of each character
    }

    //for state 1
    drawL(x, y, key) { //function to draw the bars for the histogram
        for (let i = 0; i < this.ctrs.get(key); i++) { //passes in the character value
            line(x, y, x + 11, y);
            y--;
        }
    }

    //for state 2
    drawClouds(l, x, y, i) { //function to draw each character in the letter cloud
        textSize(i / 2); //some letters are so tiny that no matter how big I make it while still fitting the screen, they're barely visible 
        text(l, x, y);
    }


    //pushes the characters forward using noise to randomize movement
    //for state 3
    shakeIt(t, x, y, key) {

        //sets variables
        let xInc = 0.009;
        let yInc = 0.002;

        let xOff = 50;
        let yOff = 5;

        xOff = xOff + xInc;
        yOff = yOff + yInc;

        //applies noise to the x and y
        let newX = noise(xOff) * (key * 1.2);
        let newY = noise(yOff) * (key * 1.2);

        textSize(60);
        text(t, x + newX, y + newY);
    }

}
