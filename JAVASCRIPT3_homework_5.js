/*Create an array (by hand) of objects and call sum() function in context of each one of them. 
Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.X+this.y}}*/

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

BaseObject = { X:0,y:0, sum: function (){ return this.X+this.y}};

(function(array){
    for (let i = 0; i < array.length; i++) {
        let newSum = BaseObject.sum.bind(arrayOfObjects[i]);
        console.log(newSum());
    }
})(arrayOfObjects);


