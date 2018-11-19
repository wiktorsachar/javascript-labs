/* Create an iffe that returns an object with three fields: variable value, 
function showValue() and function reverseValue(). Calling functions either logs
the value or reverse it in an object. If value was not provided yet or is empty
showValue function is to return information about that. Value type string or number
if number to (*(-1)) is string can be converted to umber do so.  */

let outerObject = (function(value){
    
    let obiekcik = {
        variableValue: value,
        showValue: (function(){
            if (value) {
                return value;
            } else {
                return 'The value is empty.';
            }
        })(),
        reverseValue: (function(){
            if (value && (typeof value) == 'number') {
                return value*(-1);
            } else if (value && (typeof value) == 'string' && Number(value) != 'NaN') { //tutaj musialem cos popsuc, HALP!
                return (Number(value))*(-1);
            } else {
                return 'The value cannot be converted into number.';
            }
        })()
    };
    return obiekcik;
})('somestring');

console.log(outerObject)







