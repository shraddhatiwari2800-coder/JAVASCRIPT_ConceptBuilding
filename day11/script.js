// ForEach function
let arr = [1,2,3,4,5];
arr.forEach(function(ele){
    console.log(ele);
});

arr.forEach((el)=>{
    console.log(el);
});

//  Map
let nums = [1,2,3,4];
let double = nums.map(function(ele){
    return ele*2;
});
console.log(double);

// Filter
let num = [1,2,3,4];
let check = num.filter(function(ele){
    if(ele%2==0){
        return true;
    }
});
console.log(check);

// every
let abc = [1,3,5,7];
let ans = abc.every((el) => el % 2 != 0);
console.log(ans);

// reduce 
let xyz = [1,2,3,4,5];
let sum = xyz.reduce((res, el) => res + el);
console.log(sum);

// default parameters = giving a default value to the arguments
function sum(a,b=3){
    return a + b;
};
sum(2);

// spread = expands an iterable into multiple values
let arr1 = [1,2,3,4,5,6,7,8,9,10];
let newArr = [...arr1];
console.log(newArr);
let chars = [..."hellooooooooooo"];
console.log(chars);
let odd = [1,3,6,7];
let even = [2,4,6,8,10];
let nums1 = [...odd,...even];
console.log(nums1);

// spread with object literals
let data = {
    email : "ironman@gmail.com",
    password : "abcd",
};
let dataCopy = {...data,id:123};

// rest = allows a function to take an indefinite number of arguments and bundle them in an array
