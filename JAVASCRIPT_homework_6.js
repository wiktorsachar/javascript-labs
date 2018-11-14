// Choose all the indexes on the highest value from the given array. 
// [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.  

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98];
let theHighestIndexValue = tablica[0];
let theHighestIndexes = [];
for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] > theHighestIndexValue) {
        theHighestIndexValue = tablica[i];
    };
};
for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] === theHighestIndexValue) {
        theHighestIndexes.push(i);
    };
};

console.log(`Największą liczbą z tablicy jest ${theHighestIndexValue}. Znajduje się ona pod indexami: ${theHighestIndexes}.`);