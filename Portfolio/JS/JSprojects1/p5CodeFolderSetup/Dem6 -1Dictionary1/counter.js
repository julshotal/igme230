class Counter {
    constructor(ch) {
        this.ch = ch;
        this.n = 0;
    }
    
    plus1() {
        this.n++;
    }
    
    match(l) {
        return l == this.ch;
    }
    
    get() {
        return this.n;
    }
}