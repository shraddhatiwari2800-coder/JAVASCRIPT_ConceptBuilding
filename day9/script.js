// function expressions
const sum = function(a,b){
    return a+b;
}
sum(2,3);

// higher order functions
// a function that does one or both: 
// takes one or multiple functions as arguments
// returns a function

function multipleGreet(func,count){ //higher order function
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(function() {console.log("namaste")},1000);

// Methods = actions that can be performed on an object.
const calc = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
}
console.log(calc.add(2,5));
console.log(calc.sub(120,50));
console.log(calc.mul(21,50));
