/**
 * AvStack class - by Al Biles
 * Implements a stack using an internal Array (stkAra).
 * Standard operators are one-liners from the Array class.
 * This stack stacks Avatars (objects from the Avatar
 * class and/or its subclasses).
 * moveAll() and displayAll() iterate through the stack,
 * calling Avatar methods for each Avatar on the stack.
 */

class AvStack {
	constructor() {
		// Create Array to store items on the MyStack
		this.stkAra = [];
	}

	myPush(item) {
		// New items end up at the end of the array
		this.stkAra.push(item);
	}

	myPop() {
		// Returns and deletes last item from array
		return this.stkAra.pop();
	}

	myLeng() {
		// Use the length attribute
		return this.stkAra.length;
	}

	myClear() {
		// Clears the array by replacing it with a new one
		// Rely on garbage collection to reclaim storage
		// used by the "orphaned" array once it's "dereferenced".
		this.stkAra = [];
	}

	/* Display all the Avatars in the array by calling each
	 * Avatar's display() method
	 */
	displayAll() {
		for (let i = 0; i < this.stkAra.length; i++) {
			this.stkAra[i].display();
		}
	}

	/* Move all the Avatars in the array by calling each
	 * Avatar's move() method
	 */
	moveAll() {
		for (let i = 0; i < this.stkAra.length; i++) {
			this.stkAra[i].move();
		}
	}
}
