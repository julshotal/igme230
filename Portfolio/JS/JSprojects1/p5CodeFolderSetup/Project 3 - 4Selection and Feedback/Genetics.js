/**
 *Julia Hotaling
 *Project 3 - 4 - 4/16/18
 *Create a segmented out Genetics class that is reusable, contains crossover and mutation
 **/
"use strict"

class Genetics {
    constructor(chromLength, populationSize) {
        this.chromLength = chromLength; //chromosome length
        this.bitNum = 2 ** chromLength; //total number of bits
        this.popSize = populationSize;
        this.chromArray = []; //array of chromosomes parallel to those in HueMAin
        this.fitArray = []; //array for fitness values
    }

    //creates a new chromosome
    newChrom() {
        return Math.floor(random(this.bitNum)); //returns a random bit
    }

    //takes one bit in a chromosome and flips it 
    mutate(chrom) {
        let bitLoc = Math.floor(random(0, this.chromLength)); //bit location is from 0 to the total chromosome length
        let mask = 1 << bitLoc; //left shift by the bit location 
        return chrom ^ mask; //OR the chromosome and mask to mutate the chromosome orginally passed in
    }

    //takes part of two parent chromosomes(how much depends on the crossover point) and combines them into a new child chromosome
    crossOver(parent1, parent2) {
        let xOverPt = Math.floor(random(0, this.chromLength - 1)); //randomly select a crossover point from 0 to one less than the chomosome length

        let p1Mask = ((xOverPt + 1) ** 2) - 1; //Use the crossover point squared to create a mask to apply to the first parent
        let p1Cont = parent1 & p1Mask; //AND the first parent and the mask

        let p2Bits = (parent2 >>> xOverPt) << xOverPt; //shift the second parent to the right by the crozzover point, then shift the second parent left also by the crossover point

        console.log(p1Mask, p1Cont, p2Bits); //console log to check variable numbers

        return parent1 | parent2; //return the value of the OR of the two parents 
    }

    //inserts chromosomes into the chromosome array
    insertNew(chrom, fitness, index) { 
        this.chromArray[index] = chrom; //inserts a chromosome passed in into the chromosome array at the specified index point
        this.fitArray[index] = fitness; //inserts a fitness level passed in into the fitness array at the specified index point
    }

    //increases the fitness at a specified index point by a certain amount
    bumpFitness(index, amount) {
        this.fitArray[index] += amount; //increments the fitness by amount
        console.log(index, this.fitArray[index]); //prints the index number and the new fitness value
    }

    //runs tournament style selection between two huegrids
    select() {
        let randIndiv = Math.floor(random(0, this.popSize)); //two random individuals are selected frm the population
        let randIndiv2 = Math.floor(random(0, this.popSize));

        console.log(randIndiv + ":" + this.fitArray[randIndiv] + " " + randIndiv2 + ":" + this.fitArray[randIndiv2]);
        let chromTest = 0;

        //if the first random individual is greater, it is selected, else the second individual is selected
        if (this.fitArray[randIndiv] > this.fitArray[randIndiv2]) { 
            chromTest = this.chromArray[randIndiv];
        } else {
            chromTest = this.chromArray[randIndiv2];
        }

        //console logs to help debug
        console.log(hex(this.chromArray[randIndiv]) + " vs " + hex(this.chromArray[randIndiv2]));
        return chromTest;
    }
}
