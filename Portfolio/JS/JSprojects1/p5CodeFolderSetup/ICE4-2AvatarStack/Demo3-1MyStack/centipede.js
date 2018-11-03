class Centipede {

    constructor() { //intializes an array
        this.cArr = [];
        this.cSpeed = 2;
    }

    myEnqueue(item) { //pushes a new item 
        thiscArr.push(item);
    }

    myDequeue() { //removes first item
        return this.cArr.shift();
    }

    myLeng() { //returnes queue length
        return this.cArr.length;
    }

    init(x, y) {
        //intializes a queue of 5 segments
        for (let i = 0; i < 5; i++) {
            this.cArr.push(new Segment(x, y));
        }
    }

    display() { //displays queue of segments
        if (this.cArr.length > 0) {
            for (let i = 0; i < this.cArr.length; i++) {
               this.cArr[i].display();
            }
        }
    }

    clear() { //clears the array
        this.cArr = [];
    }
}
