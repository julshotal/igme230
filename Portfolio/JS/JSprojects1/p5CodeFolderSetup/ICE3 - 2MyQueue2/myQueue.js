/**
 * MyQueue class - Julia Hotaling
 * Implements a queue
 **/

class MyQ {
    constructor() { //intializes an array
        this.qArr = [];
    }

    myEnqueue(item) { //pushes a new item 
        this.qArr.push(item);
    }

    myDequeue() {//removes first item
        return this.qArr.shift();
    }

    myLeng() { //returnes queue length
        return this.qArr.length;
    }

    display() { //displays color bar
        if (this.qArr.length > 0) {
            for (let i = 0; i < this.qArr.length; i++) {
                stroke(this.qArr[i], 100, 100);
                line(50, height - 1 - i, 150, height - 1 - i);
            }
        }
    }
}
