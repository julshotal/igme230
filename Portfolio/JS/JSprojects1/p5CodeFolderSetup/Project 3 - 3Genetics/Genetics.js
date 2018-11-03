/**
 *Julia Hotaling
 *Project 3 - 3 - 4/9/18
 *Create a segmented out Genetics class that is reusable, contains crossover and mutation
 **/
"use strict"

class Genetics {
    constructor(chromLength){
        this.chromLength = chromLength; //chromosome length
        this.bitNum = 2 ** chromLength; //total number of bits
    }
    
    newChrom() {
        return Math.floor(random(this.bitNum)); //returns a random bit
    }
    
    //takes one bit in a chromosome and flips it 
    mutate(chrom){
        let bitLoc = Math.floor(random(0, this.chromLength)); //bit location is from 0 to the total chromosome length
        let mask = 1 << bitLoc; //left shift by the bit location 
        return chrom^mask; //OR the chromosome and mask to mutate the chromosome orginally passed in
    }
    
    //takes part of two parent chromosomes(how much depends on the crossover point) and combines them into a new child chromosome
    crossOver(parent1, parent2){
        let xOverPt = Math.floor(random(0, this.chromLength - 1)); //randomly select a crossover point from 0 to one less than the chomosome length
        
        let p1Mask = ((xOverPt + 1)** 2) - 1; //Use the crossover point squared to create a mask to apply to the first parent
        let p1Cont = parent1&p1Mask; //AND the first parent and the mask
    
        let p2Bits = (parent2 >>> xOverPt) << xOverPt; //shift the second parent to the right by the crozzover point, then shift the second parent left also by the crossover point
        
        console.log(p1Mask, p1Cont, p2Bits); //console log to check variable numbers
       
        return parent1|parent2; //return the value of the OR of the two parents 
    }
}