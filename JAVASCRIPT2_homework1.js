// ARRAY: [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
//Create a function that returns the sum of all elements passed in array as parameter.

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function sumOfAnArray(x) {
    let counter = 0
    for (let i = 0; i < x.length; i++) {
        counter = counter + x[i];     
    }
    return counter;
}

console.log(sumOfAnArray(tablica));