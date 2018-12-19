/*1. Stwórzmy pierwszy nasz obiekt Promise, który zwróci nam w rezultacie `Hello world!`
const myPromise = ... <------ stworzenie obiektu Promise i logiki
myPromise.then(result => {
console.log(result);
});*/

const obietnica = new Promise((resolve, reject) => {
    resolve('Hello World');
});

obietnica
    .then(result => {
        console.log(result)
    });