// Create a function that takes a number and return factorial of that number.

let anyNumber = 4 //numerek z ktorego wyliczana jest silnia

function factorial(x) {
    let array = [x]; //tablica do ktorej wrzucane sa liczby, ktore po przemnozeniu dadza pozadana silnie
    let i = 1; //zmienna sterujaca petli while. nie zaczyna sie od zera, zeby nie popsuc mnozenia
    while (i < x) {
        array.push(i)
        i++
    }; //petla wrzucajaca do tablicy array liczby mniejsze od liczby, z ktorej wyliczana jest silnia (x)
    let factorialValue = 1; //zmienna przechowujaca wartosc silni. nie zaczyna sie od zera, zeby nie popsuc mnozenia
    for (let j = 0; j < array.length; j++) {
        factorialValue = factorialValue * array[j];
    }; //petla wyliczajaca wartosc silni

return factorialValue;
};
console.log(`Silnia liczby: ${anyNumber} wynosi: ${factorial(anyNumber)}.`);
