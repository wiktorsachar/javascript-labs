//	With a given start value of 0. Iterate the array and add even items and subtract odd ones.

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let valueVariable = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2 ===0) {
        valueVariable = valueVariable + array[i];
    } else if (array[i]%2 !==0){
        valueVariable = valueVariable - array[i];
    } else {console.log('Something went wrong.')};
};
console.log(array);
console.log(valueVariable);