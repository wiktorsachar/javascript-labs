//Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
let tablica = [1,6,23,8,4,98,3,7,3,98,4,98];
let lowestNumber = tablica[0];
let highestNumber = tablica[0];
for (let i = 0; i < tablica.length; i++) {
    if (lowestNumber > tablica[i]) {
        lowestNumber = tablica[i]
    } else if (highestNumber < tablica[i]){
        highestNumber = tablica[i]

    };
    
};
console.log(`Najnizszym numerem z tablicy jest: ${lowestNumber}, a najwyzszym ${highestNumber}.`);