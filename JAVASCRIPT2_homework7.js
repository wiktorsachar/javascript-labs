// Create a function the return one random element from given array. // use random function 
//ARRAY: [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

const tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function arrayLottery(array){
    let randomIndex = Math.floor(Math.random()*(array.length));
    return array[randomIndex];  
     
};
 
 console.log(arrayLottery(tablica));