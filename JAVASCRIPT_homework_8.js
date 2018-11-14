//	Calculate average value of items at even indexes. 
// Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98];
let evenIndexesValue = 0;
let indexCounter = 0
for (let i = 1; i < tablica.length; i++) {
    if (i != 0 && i%2 ===0)
    evenIndexesValue = evenIndexesValue + tablica[i];
    indexCounter++;
    
};
let averageValueOfEvenIndexes = evenIndexesValue / indexCounter;
console.log(`Średnia wartość liczb z parzystymi indexami zbioru: ${tablica} wynosi ${averageValueOfEvenIndexes}.`);