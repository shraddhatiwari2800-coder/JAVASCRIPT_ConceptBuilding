let side = 4;
let area = side**2;
console.log(area); //16

let num1=2;
let num2=9;
let sum = num1+num2;
console.log(sum);

let age = 23;
age+2; //this will give 25 but age will still remain 23 because age+2 is not assigned and updated to age variable;

let a = 30;
let b = 27;
let c = 25;
let avg = (a+b+c)/3;
console.log(avg);

//pre-inc (change,then use)
let xyz = 10;
let newxyz = ++xyz;
console.log(xyz);
console.log(newxyz);

//post-inc (use,then change)
let abc = 10;
let Newabc = abc++;
console.log(abc);
console.log(Newabc);

let num = 5;
let newNum = num++;
newNum = ++num;
console.log(num);
console.log(newNum);

let name = "TONY STARK"; //string
console.log(name[0]); //T
console.log(name.length); //10
console.log(typeof name.length); //number
console.log(name[name.length-1]); //K

let firstName = "Tony";
let lastName = "Stark";
let fullName = firstName + " " + lastName;
console.log(fullName); //Tony Stark

//undefined = a variable that has not been assigned a value is of type undefined.
//null = null value represents the intentional absence of any object value. to be explicitly assigned.

