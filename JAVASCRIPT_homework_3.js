// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let items = [1,6,23,8,4,98,3,7,3,98,4,98]; 
//tablica ze wszystkimi liczbami
let theOddItems = []
//tablica z liczbami nieparzystymi
let sum = 0
//suma liczb nieparzystych

for (let i = 0; i < items.length; i++) {
    if (items[i]%2 !=0){
theOddItems.push(items[i]);
    };   
};
//petla wrzucajaca liczby nieparzyste z tablicy ogolnej do tablicy z liczbami nieparzystymi

for (let i = 0; i < theOddItems.length; i++) {
    sum = sum + theOddItems[i]
    
};
//petla sumujaca liczby z tablicy z liczbami nieparzystymi

console.log(`Suma liczb nieparzystych wynosi: ${sum}.`)