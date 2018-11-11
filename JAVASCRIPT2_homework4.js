//Create a function that returns given array in reverse order. // no build in functions
// ARRAY: [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

const tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function reverseArray (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    };
    return newArray;
};

console.log(reverseArray(tablica));