/*. Stwórzmy aplikację która będzie posiadała funkcję dzielenia 2 liczb.
Jak wiadomo JS jest ciekawym językiem, który pozwala dzielić przez 0... efektem dzielenia 
przez zero jest
wartość Infinity, np.:

const result = 2 / 0;
console.log(result); // => Infinity

Zabezpieczmy naszą aplikację tak aby funkcja dzielenia rzucała wyjątkiem w przypadtku gdy 
drugi parametr
ma wartość 0 (np. new Error('divide by 0')).
Oczywiście stwórzmy przykładowe wywołanie naszej funkcji z blokiem try..catch.*/

let dividend = process.argv[2];
let divider = process.argv[3];

try {
    if (divider == 0) {
        throw new Error('Pamietaj cholero, nigdy nie dziel przez zero!');
    } else {
        const result = dividend / divider;
        console.log(result);
    }
} catch (error) {
    console.log(error.message);
};
