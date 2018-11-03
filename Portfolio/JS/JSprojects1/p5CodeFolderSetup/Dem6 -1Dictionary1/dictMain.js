/**
 * Julia Hotaling
 * IGME-102: Demo6 - 1, 2/16/18
 * IGME-102: Demo6 - 1Dictionary1, 2/19/18
 * dictionary demo
 **/
"use strict"

let ctrs = [];
let s = "aababcabcdabcdeabcde";
let nStmts = 0;

function setup() {
    ctrs.push(new Counter('a'));
    ctrs.push(new Counter('b'));
    ctrs.push(new Counter('c'));
    ctrs.push(new Counter('d'));
    ctrs.push(new Counter('e'));

    let sAra = s.split(''); //if you leave '' empty it splits everything out to each character

    //walk through array
    for (let i = 0; i < sAra.length; i++) {
        for (let j = 0; j < ctrs.length; j++) {
            nStmts++;
            if (ctrs[j].match(sAra[i])) {
                nStmts++;
                ctrs[j].plus1();
            }
        }
    }

    print(ctrs);
    print(nStmts + " statements executed for " + s.length + " letters");
}

function draw() {

}
