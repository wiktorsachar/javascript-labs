//Create a function that based on given array returns new array in 
//pattern [a,b,c,d,e,d] -> [a+b, c+d, e+d]
//[1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function przerzutnik(array) {
    newArray = [];
    let valueHolder = 0;
    for (let i = 0; i < array.length; i=i+2) {
        valueHolder = array[i] + array[i+1];
        newArray.push(valueHolder);
        valueHolder = 0;
        
    }
    return newArray;
};

console.log(przerzutnik(tablica));