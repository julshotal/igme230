/**
 * Julia Hotaling
 * IGME-102: Demo6 - 2numDict, 2/21/18
 * uses p5.js NumberDict class for counters
 **/
"use strict"

let ctrs = [];
let s = "abcde";
let nStmts = 0;

function setup() {

    ctrs = createNumberDict();
    ctrs.create('a', 0);
    ctrs.create('b', 0);
    ctrs.create('c', 0);
    ctrs.create('d', 0);
    ctrs.create('e', 0);
    

    let sAra = s.split(''); //if you leave '' empty it splits everything out to each character

    //walk through array
    for (let i = 0; i < sAra.length; i++) {
       nStmts++;
        ctrs.add(sAra[i], 1);
    }

    ctrs.print;
    print(nStmts + " statements executed for " + s.length + " letters");
}

function draw() {

}
