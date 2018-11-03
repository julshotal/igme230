"use strict"

/* Word Frequency class -  Julia Hotaling
 * a dictonary class used to store a dictonary of words generated from a 
 * text file. When l is pressed, the words appear on the screen and get larger based on number * of times used.
 */

class WordFreq {
    constructor() {
        //creates the dictonary
        this.ctrs = createNumberDict();

        //create an array to store words for display
        this.wordThing = [];
    }

    countLine(lNum) {
        //turns the string to all lower case
        let sLC = lNum.toLowerCase();

        //replaces all punctuation with the null string
        let noPunc = sLC.replace(/[,.?!";:]/g, '');

        //replaces dashes with spaces
        let noDash = noPunc.replace(/-/g, ' ');

        //split the array into seperate words
        let sArr = noDash.split(' ');

        for (let i = 0; i < sArr.length; i++) {
            //if the character exists in the dictonary already, one more is added
            if (this.ctrs.hasKey(sArr[i])) {
                this.ctrs.add(sArr[i], 1);
            } else {
            //if the word doesn't exist in the dict yet, it is created and pushed into the array
                this.ctrs.create(sArr[i], 1);
                this.wordThing.push(sArr[i]);
            }
        }
    }

    display(state) {
        if (state == 0) {
            console.log("the state is 0"); //black screen
        } else if (state == 1) {


            for (let i = 0; i < this.wordThing.length; i++) {
                let x = (i % 20) * 22 + 35; //gives you 0-3 for position 
                let y = (Math.floor(i / 25) * 26 + 100); //spaces out each line of words

                fill(i/2, 100, 100, .57); //rainbow fill
                this.drawClouds(this.wordThing[i], x, y, this.ctrs.get(this.wordThing[i]));
            }

        } 
    }

    //reintializes the dictonary and array each time a new state is called
    reInit() {
        this.ctrs.clear();

        this.wordThing = [];

    }

    dump() {
        this.ctrs.print(); //prints out the count of each word
    }



    //draws and animates the text in the wordcloud
    drawClouds(l, x, y, i) { //function to draw each word in the letter cloud
        textFont('Comic Sans MS');
        textAlign(CENTER)
        textSize(i * 3); //text size increases depending how how many times a word is used 
        text(l, x, y);
    }




}
