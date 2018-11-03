/**
 * Julia Hotaling
 * IGME-102: Demo6 - 1Dictionary2, 2/19/18
 * dictionary demo
 **/
"use strict"

let ctrs = [];
let s = "aababcabcdabcdeabcde";
let nStmts = 0;

function setup() {

    ctrs = {
        'a': 0,
        'b': 0,
        c: 0,
        d: 0,
        e: 0,
    }

    let sAra = s.split(''); //if you leave '' empty it splits everything out to each character

    //walk through array
    for (let i = 0; i < sAra.length; i++) {
       nStmts++;
        ctrs[sAra[i]]++;
    }

    print(ctrs);
    print(nStmts + " statements executed for " + s.length + " letters");
}

function draw() {

}
