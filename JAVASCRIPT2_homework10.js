//Create a function that on given array will perform operation of adding or subtracting elements. 
//Operation is to be chosen at random.  And return a result. [a,b,c,d] => (((a+-b)+-c)+-d)
//[1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

const tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function randomAddOrSubstract(array) {
    let valueOfAnArray = 0;
   for (let i = 0; i < array.length; i++) {
       let randomer = Math.floor(Math.random()*2);
       if (randomer === 0) {
           valueOfAnArray = valueOfAnArray - array[i];
       } else {
           valueOfAnArray = valueOfAnArray + array[i];
       };
   };
   return valueOfAnArray;
};

console.log(randomAddOrSubstract(tablica));