/**
 * MyStack class - Julia Hotaling
 * Implements a stack
 **/

class MyStack {
    constructor() {
        this.stkAra = [];
    }

    myPush(item) {
        //adds a new item to the array
        this.stkAra.push(item);
    }

    myPop() {
        //removes the top element of the stack
        return this.stkAra.pop();
    }
    
    display() {
        //displays the array
        for (let i = 0; i < this.stkAra.length; i++) {
            stroke(this.stkAra[i], 100, 100);
            line(50, height - 1 - i, 150, height - 1 - i);
        }
    }
    
    myLeng() {
        //stores the length of the array
        return this.stkAra.length;
    }
}
