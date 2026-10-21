// STRING METHODS:
let msg = "    message    "
let newMsg = msg.trim();
console.log(newMsg); //message

// let password = prompt("Enter the password: ");
// console.log(password.trim());

// Note = Strings are immutable in JS. No changes can be made to strings. Whenever we do try to make a change, a new string is created and old one remains same.

let str = "Random String";
console.log(str.toUpperCase()); //RANDOM STRING
console.log(str.toLowerCase()); //random string

// String method with arguments = argument is some value that we pass to the method
// indexOf = returns the first index or -1 if not found.
let string = "Ilovecoding";
console.log(string.indexOf("love")); // 1
console.log(string.indexOf("o")); // 2
console.log(string.indexOf("k")); // -1

// Method Chaining = methods in order in a sinle line
let abc = "hello";
let newabc = abc.trim().toUpperCase();
console.log(newabc); //HELLO

// slice =  returns a part of the original string as a new string
let xyz = "Ilovecoding";
console.log(xyz.slice(5)); //coding
console.log(xyz.slice(1,4)); //lov
console.log(xyz.slice(-1));//g
console.log(xyz.slice(-5));//oding

// replace = seraches a value in the string and returns a new string with the value replaced.
console.log(xyz.replace("love","do")); //Idocoding
// repeat = returns a string with a number of copies of string
let str2 = "Mango";
console.log(str2.repeat(3)); //MangoMangoMango

// ARRAY = (Data Structure) linear collection of things
// arrays are mutable
let fruits = ["cherry","kiwi","avocado"];
fruits[0] = "strawberry";
console.log(fruits); // ['strawberry', 'kiwi', 'avocado']
// Array Methods =
// push = add to end
// pop = delete from end and returns it
// unshift = add to start
// shift = delete from start and returns it
// includes = search for a value
// indexOf = returns index
// concat = merge two arrays
// reverse = reverse an array
// slice = copies a portion of an array
// splice = removes/replaces/add elements in place
// sort = sorts an array
let cars = ["audi","mercedes","bmw","rolls royce"];
cars.push("toyota");
console.log(cars); //['audi', 'mercedes', 'bmw', 'rolls royce', 'toyota']
console.log(cars.pop()); //toyota
console.log(cars); // ['audi', 'mercedes', 'bmw', 'rolls royce']
cars.unshift("ferrari");
console.log(cars); // ['ferrari', 'audi', 'mercedes', 'bmw', 'rolls royce']
cars.shift();
console.log(cars); //['audi', 'mercedes', 'bmw', 'rolls royce']
let color = ["blue","orange","green"];
console.log(color.indexOf("green")); //2
console.log(color.includes("orange")); // true
let nextcolor = ["red","brown","silver"];
console.log(color.concat(nextcolor)); // ['blue', 'orange', 'green', 'red', 'brown', 'silver']
console.log(nextcolor.reverse()); // ['silver', 'brown', 'red']
console.log(color.slice(2)); // ['green']
let abcd = ["agra","mathura","hathras","banaras","patna"];
console.log(abcd.splice(0,1)); // ['agra']
let days = ["mon","sun","wed","tue"];
console.log(days.sort()); // ['mon', 'sun', 'tue', 'wed']
// constant arrays = In JavaScript, declaring an array with the const keyword creates a constant reference to the array, not a constant array
// Nested Arrays = 
let nums = [ [2,4], [3,6], [4,8] ];
// To access elements in nested array (2D array) in JavaScript, we use double square brackets [row][column]. JavaScript arrays use zero-based indexing, meaning the count starts at 0
