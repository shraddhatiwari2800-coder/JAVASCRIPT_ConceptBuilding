// JS Object Literals
// used to store keyed collections and complex entities
// property => (key,value) pair
// Objects are a collection of properties.

const student = {
    name:"Shraddha",
    age:21,
    marks:77.5,
    city:"ND"
}; //no specific order

const item = {
    price:100,
    discount:"50rs",
    color:["aqua marine","dusk red"]
};

const post ={
    username:"shraddha@abc",
    content:"My first post on IG",
    likes:"1.5M",
    reposts:50
};

// Get Values
console.log(student.name); //Shraddha
console.log(student["city"]); //ND

// JS automatically converts objects keys to strings. Even if we made the number as key, the number will be converted to string.

// Object of Objects = Storing information of multiple students
const classInfo = {
    aman:{
        grade:"A",
        city:"Mumbai"
    },
    Shraddha:{
        grade:"O",
        city:"Haryana"
    },
    karan:{
        grade:"A+",
        city:"Punjab"
    }
};
// Math Objects
// properties = Math.E , Math.Pi
// Methods 
// Math.abs(n)
// Math.pow(a,b)
// Math.floor(n)
// Math.ceil(n)
// Math.random()

let num = Math.random();
num = num*10;
num = Math.floor(num);
num = num+1;
console.log(num);
