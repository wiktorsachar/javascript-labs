/* Stwórzmy aplikację która będzie posiadała funkcję asynchroniczną dodawnia 2 liczb do siebie. Jeżeli
wynik będzie liczbą parzystą powinniśmy wyrzucić błąd i poinformować użytkownika o tym fakcie.

// my func ... etc...
add(4, 5)
.then( ... )
.catch( ... );

-----------------------------------------

Zmodyfikujmy nasze zadanie 4 tak aby zamiast .then..catch użyć await. */

let x = Number(process.argv[2]);
let y = Number(process.argv[3]);

async function sum (x, y) {
    let sum = x + y;
    if (sum%2 == 0) {
        throw new Error ('Niestety ten program dyskryminuje parzyste liczby i wyswietla tylko nieparzyste :(');
    } else {
        return sum;
    }
};

sum(x, y)
.then((result) => console.log(result))
.catch((error) => console.log(error.message));

//nie zrobione