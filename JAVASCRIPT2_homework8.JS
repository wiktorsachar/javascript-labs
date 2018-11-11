//Create a function that takes two parameters array and number off attempts. 
//Based on number of attempts choose a random number from table that many times and return lowest one.
//[1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function randNumber(array, numberOfAttempts) {
    let container = [];
    let randomer = 0;
    let valueHolder = Infinity;
    for (let i = 0; i < numberOfAttempts; i++) {
        randomer = Math.floor(Math.random()*(tablica.length));
        container.push(array[randomer]);
    }
    for (let i = 0; i < container.length; i++) {
        if (valueHolder > container[i]) {
            valueHolder = container[i];
        }
    }
    return valueHolder;
};

console.log(randNumber(tablica, 3))