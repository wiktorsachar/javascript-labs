/*Create an array (by hand) of objects and call sum() function in context of each one of them. 
Sum function is to come from this object BaseObject = { X, sum: function (y){ return this.X+y}}*/

let arrayOfObjects = [
    {
        X: 1,
        y: 2
    },
    {
        X: 3,
        y: 4
    },
    {
        X: 5,
        y: 6
    }
];

BaseObject = { X:0, sum: function (y){ return this.X+y}};

(function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(BaseObject.sum.bind(array[i])(array[i].y))
        
    }
}) (arrayOfObjects);