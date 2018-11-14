// Choose longest string from the array. 
// [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run

let tablica = ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'];
let theLongestStringValue = tablica[0].length
let theLongestString = tablica[0]
for (let i = 0; i < tablica.length; i++) {
    if (tablica[i].length > theLongestStringValue) {
        theLongestStringValue = tablica[i].length
        theLongestString = tablica[i]
    }
    
}
console.log(`Najdluzszym stringiem z tablicy jest wyraz "${theLongestString}" i liczy ${theLongestStringValue} znaków.`);