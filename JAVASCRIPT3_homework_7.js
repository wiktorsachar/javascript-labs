/*Given an array of objects, for each object call operation() function in its context but from next object. 
If object is last get back to start of the array for operation function. In loop  (for or while) */

let tab = [
    {
        x: 1,
        y: 'object one value',
        operation: function () {
            return 'object one prafix' + this.x + this.y
        }
    },
    {
        x: 2,
        y: 'object two value',
        operation: function () {
            return 'object two prafix' + this.x + this.y
        }
    },
    {
        x: 3,
        y: 'object three value',
        operation: function () {
            return 'object three prafix' + this.x + this.y
        }
    },
]

function operationChanger(array) {

    let functionContainer = '';

    for (let i = 0; i < array.length - 1; i++) {
        functionContainer = array[i].operation;
        console.log(functionContainer.bind(array[i+1])(array[i+1]))
    }

    functionContainer = array[array.length-1].operation;
    console.log(functionContainer.bind(array[0])(array[0]));
    
};

operationChanger(tab);




