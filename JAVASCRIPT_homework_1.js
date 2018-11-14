// przestepny rok: przez 100 lub 4, niepodzielny przez 400
let years = [1974, 1900, 1985, 2000];
for (let i = 0; i < years.length; i++) {
    if ((years[i]%100 ===0 || years[i]%4 ===0) && years[i]%400 !=0) {
        console.log(`Rok ${years[i]} jest rokiem przestepnym.`)
    } else {
        console.log(`Rok ${years[i]} nie jest rokiem przestepnym.`)
    }
    
};