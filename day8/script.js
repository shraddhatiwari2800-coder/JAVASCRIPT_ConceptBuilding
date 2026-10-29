//functions with definitions

function hello(){
    console.log("hello!");
}
// hello();
// hello();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
// print1to5();

function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
// rollDice();

//functions with arguments = values we pass to the function
function printNum(num){
    console.log(num);
}
// printNum(9);

function printUser(name,age){
    console.log(`${name}'s age is ${age}`);
}
// printUser("Ram",25);
// printUser("Shyam",26);
// printUser("Mohan");

function Avg(a,b,c){
    let avg = ((a+b+c)/3);
    console.log(avg);
}
//Avg(2,7,8);

function mul(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
//mul(8);

// return = return keyword used to return value from the function
function mul(a,b){
    return a * b;
}
// console.log(mul(3,7));

let str = ["abc","pyq","str"];
function concat(str){
    let res = "";
    for(let i=0;i<str.length;i++){
        res+=str[i];
    }
    return res;
}
// console.log(concat(str)); // abcpyqstr

// scope = determines the accessibility of variables,objects, and functions from different parts of the code.

//function scope = variables defined inside a function are not accessible from outside the function.

let sum = 56; //global scoped
function calculatesum(a,b){
    let ans = a + b; //function scoped
    console.log(ans);
}
calculatesum(9,8);

//block scope = variables declared inside a {} block cannot be accessed outside the block.

{
    let a = 25; //block scoped
}

//lexical scope = a variable deined outside a function can be accessible inside another function defined after the variable declaration.

function outerFunc(){
    let x = 90;
    let y = 10;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}
