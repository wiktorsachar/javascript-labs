//Create a function that takes given array. Then takes a random element, removes it from the array 
//and pushes it to result arrays. This takes place as long as there are elements in source array. 
//[1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function arrayRandomReturner(array){
    
    let newArray = [];
    
    while (array.length > 0) {
        let randomer = Math.floor(Math.random()*(tablica.length));
        let numberHolder = tablica.splice(randomer,1);
        newArray.push(numberHolder);
    };
    newArray = newArray.concat.apply([], newArray);
    return newArray;
};

console.log(tablica);
let tablica2 = arrayRandomReturner(tablica);
console.log(tablica2);