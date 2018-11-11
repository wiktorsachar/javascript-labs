//	For time of this example remove last element from the given array. 
// Create a function that based on given array return new array in 
// pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20];

function przerzutnik(array) {
    newArray = [];
    let valueHolder = 0;
    if (array.length%2 ===0) {
        for (let i = 0; i < array.length; i=i+2) {
            valueHolder = array[i] + array[i+1];
            newArray.push(valueHolder);
            valueHolder = 0;
        } 
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i%2 ===0 && i !==array.length-1) {
                valueHolder = array[i] + array[i+1];
                newArray.push(valueHolder);
                valueHolder = 0;
            }
            
            if (i === array.length-1) {
                    valueHolder = array[i] + array[i-1];
                    newArray.push(valueHolder);
            }
            
        }
        
    }
    
    return newArray;   
    }
    


console.log(przerzutnik(tablica));