/* Change the above iffe. So that returned object doesn’t publicly allow access 
to value but instead of that gives us a function setValue(). Purpose of this function
 is quite easy to grasp. Closure pattern. */

 let outerObject = (function(){
    let value = 8;
    
    let obiekcik = {
        showValue: (function(){
            if (value) {
                return value;
            } else {
                return 'The value is empty.';
            }
        })(),
        reverseValue: (function(){
            if (value && typeof value == 'number') {
                return value*(-1);
            } else if (value && typeof value == 'string' && !isNaN(Number(value))) {
                return (Number(value))*(-1);
            } else if (value && typeof value == 'string' && isNaN(Number(value))){
                let splitString = value.split('');
                let reverseArray = splitString.reverse();
                return reverseArray.join('');
            } else {
                return 'The value cannot be converted into number.';
            }
        })()
    };
    let getValue = function(){
        return obiekcik;
    };
    let setValue = function(newValue){
        value = newValue;
    };
    
    return {
        innerData: getValue,
        setInnerData: setValue
    }
    
})();

//console.log(outerObject);
console.log(outerObject.innerData());

outerObject.setInnerData(5);
console.log(outerObject.innerData()); //Dlaczego jest 8, a nie 5?


