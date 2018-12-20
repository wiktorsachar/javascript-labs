/*Stwórzmy Promise wykorzystujący funkcję `setTimeout` która wykona się po 5 sekundach i
rozwiąże nasz Promise z naszym przywitaniem `Hello world!*/

const obietnica = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Hello World')}, 5000);
});

obietnica
    .then(result => {
        console.log(result)
    });