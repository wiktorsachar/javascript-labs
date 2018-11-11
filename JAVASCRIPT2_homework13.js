//Create a function that take two numbers and return the object with 4 fields. 
// Result on 4 basic arithmetic operations. 

function Arithmetic(number1, number2) {
    let arithmeticObject = {
        add: number1+number2,
        substract: number1-number2,
        multiply: number1*number2,
        divide: number1/number2
    }
    return arithmeticObject;
};

let Obiekt = Arithmetic(4,2);

console.log(Obiekt);
console.log(Obiekt.add);
