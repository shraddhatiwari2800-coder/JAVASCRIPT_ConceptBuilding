//this keyword = "This" keyword refers to an object that is executing the current piece of code.
const student = {
    name:"Shraddha",
    age:21,
    eng:98,
    maths:90,
    phy:92,
    getAvg() {
        let avg = (this.eng + this.maths + this.phy)/3;
        console.log(avg);
    }
}
student.getAvg();

console.log("hello");
let a = 5;
try{
    console.log(a);
}
catch(err){
    console.log("error");
    console.log(err);
}
console.log("namaste");

// arrow functions
const sum = (a,b) =>{
    console.log(a+b);
}
sum(5,9);

const div = (c,d) => (c/d);
console.log(div(8,4));

// setTimeout function
console.log("hello");
setTimeout( ()=> {
    console.log("heyyyy");
},4000);
console.log("hmmmmmm");

// The setInterval() method repeatedly calls a function or executes a code snippet with a fixed time delay between each call. It returns a unique interval ID, which you can pass to clearInterval() to stop the loop.
// syntax = let intervalID = setInterval(function, delay, param1, param2, ...);
