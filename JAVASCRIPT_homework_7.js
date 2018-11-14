// 	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98];
let counter = 0;
let ValueOfEvenNumbers = 0;

for (let i = 0; i < tablica.length; i++) {
    if (tablica[i]%2 ===0) {
        ValueOfEvenNumbers += tablica[i];
        counter++; 
    }
}


let averageValueOfEvenNumbers = ValueOfEvenNumbers/counter;
console.log(`Srednia liczb parzystych ze zbioru: ${tablica} wynosi ${averageValueOfEvenNumbers}.`);