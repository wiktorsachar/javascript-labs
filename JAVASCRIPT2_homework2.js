// Create a function that returns sum of first and last elements of given array.
//[1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

const tablica = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];
//zadeklarowanie tablicy
function sumOfFirstAndLastElements(array) {
    return array[0] + array[array.length-1]
};
//funkcja zwracajaca sume pierwszego i ostatniego elementu tablicy
console.log(sumOfFirstAndLastElements(tablica));
