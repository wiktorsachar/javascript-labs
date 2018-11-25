/*-Create four function definitions. One for every basic math operations and taking two input parameters. 

-Create one more function. This function is to return calculation object. This object is to have
parameters object field that holds two operation parameters inside (x and y). 

-Function field that points to a function with math operation (defined at the beginning). 

-A function setOperation() that sets the field from previous sentence and a Calculate function that makes calculation 
and returns its value.*/

let add = function (a, b) {
    return a+b;
};

function substract (a, b) {
    return a-b;
};

function multiply (a, b) {
    return a*b;
};

function divide (a, b) {
    return a/b;
};

let calculationObject = (function (param1, param2){
    let parametersObjectField = {
        x: param1,
        y: param2
    };

    let operationField = 'lol';
    
    let setOperation = function (operation){
        if (operation == '+') {
            operationField = add;
        } else if (operation == '-') {
            operationField = substract;
        } else if (operation == '*') {
            operationField = multiply;
        } else if (operation == '/') {
            operationField = divide;
        } else {
            return 'wrong';
        }
    };

    let calculate = function () {
        return operationField(parametersObjectField.x, parametersObjectField.y)
    };
    
    return {
        setOperation: setOperation,
        calculate: calculate,
    };

})(7,5)

console.log(calculationObject)
calculationObject.setOperation('/')
console.log(calculationObject.calculate())

