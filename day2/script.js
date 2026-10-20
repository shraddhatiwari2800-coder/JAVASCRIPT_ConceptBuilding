let a = 5;
let b = 10;
let price = `Total price is: ${a+b}`; //template literals = used to add embedded expressions in a string
console.log(price);

// Arithmetic Operators
let p = 2;
let q = 3;
console.log(p + q);
console.log(p - q);
console.log(p * q);
console.log(p / q);
console.log(p % q);
console.log(p ** q);

// Unary Operators
let x = 21;
let num1 = console.log(++x); //22
console.log(x); //22
let y = 23;
let num2 = console.log(y++); //23
console.log(y); //24

// Assignment Operator Example
let c = 12;
let d = 14;
d = c;
console.log(d); //12

// Comparison Operators
let n = 12;
let m = 14;
console.log(n > m); // false
console.log(n >= m); // false
console.log(n < m); // true
console.log(n <= m); // true
console.log(n == m); // false
console.log(n != m); // true

// == compares value, not type
// === compares value and type (both)
// Js is a case-sensitive language.
// Conditionals = 
let color = "red";
if(color == "red"){
    console.log("Stop");
}
if(color == "yellow"){
    console.log("Get Ready");
}
if(color == "green"){
    console.log("Go");
}

let age = 14;
if(age>18){
    console.log("you can vote");
}
else if(age<18){
    console.log("you cannot vote");
}
else{
    console.log("wrong input");
}

let marks = 88;
if(marks>=33){
    if(marks>=88){
        console.log("O");
    }
    else{
        console.log("A");
    }
}
else{
    console.log("Better luck next time!");
}

// falsy value = false,0,-0,"",null,undefined,NaN,On(BigInt value);
// truthy values = everything else;


let colour = "yellow";
switch(colour){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("Be ready");
        break;
    case "green":
        console.log("Get Set Go!");
        break;
    default:
        console.log("broken light");            
}
// logical AND(&&) logical OR(||) logical Not(!)
// alert = displays an alert messgae on the page
// prompt = displays a dialog box that asks user for some input
alert("hiii!!!");
console.error("error message!");
console.warn("warning message!");
let rollno = prompt("enter your roll no: ");
console.log(rollno);
