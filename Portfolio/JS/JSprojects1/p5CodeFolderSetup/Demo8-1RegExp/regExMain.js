/**
 * Julia Hotaling
 * IGME-102: Demo8 - 1 Regular Expression, 3/5/18
 * using replace() with regular expressions
 **/
"use strict"

let haiku;

function preload() {
    haiku = loadStrings("Haiku1.txt");
}

function setup() {
    //print(haiku);
    for (let i = 0; i < haiku.length; i++){
        doALine(haiku[i]);
    }
}

function draw() {
    background(100);
}

function doALine(s){
    print(s);
    let sLC = s.toLowerCase();
    print(sLC);
    //replaces all punctuation with the null string
    let noPunc = sLC.replace(/[,.?!";:]/g, '');
    print(noPunc);
    //replaces dashes with spaces
    let noDash = noPunc.replace(/\-/g, ' ');
    print(noDash);
}
