/*Stwórzmy aplikację która będzie odejmowała 2 liczby. Wykorzystując `Promise` dodajmy
regułę jeżeli wynik odejmowania będzie niższy niż 0 ma zwrócić błąd z informacją(rejected),
jeżeli rezultat będzie dodatni ma zwrócić wynik*/

function sub(a, b) {return new Promise((resolve, reject) => {
        if (a-b >= 0) {
        resolve(a-b);
        } else{
            reject('substraction result is less than 0');
        }
    })
};

sub(1, 1).then(
result => (console.log(result)),
error => (console.log(error))
);