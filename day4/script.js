// loops = used to iterate a piece of code
// for(initialization;condition;updation){ code........ }
for(let i=1;i<=5;i++){
    console.log(i);
}
for(let j=1;j<=15;j++){
    if(j%2!=0){
        console.log(j);
    }
}
for(let k=5;k<=50;k+=5){
    console.log(k);
}

// let n = prompt("enter the number: ");
// n = parseInt(n);
// for(let i = n; i <= n * 10 ; i = i + n){
//     console.log(i);
// }

// Nested for loop = 
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(j); //1 2 3 1 2 3 1 2 3
    }
}

// while(condition) { code........ }
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

// Favourite Movie Game
// const favMovie = "Son of Satyamurthy";
// let guess = prompt("guess the movie: ");
// while((guess!=favMovie)&&(guess!="QUIT")){
//     guess=prompt("Wrong guess!..Try again..!");
// }
// if(guess==favMovie){
//     console.log("Congratulations!!");
// }
// else{
//     console.log("you quit!")
// }

let p = 1;
while(p<=5){
    if(p==3){
        break;
    }
    console.log(p);
    p++;
}

// loops with arrays
let fruits = ["apple","mango","banana","litchi","orange"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

// loops with nested arrays
let hero = [
    ["spiderman","ironman","thor"],
    ["superman","wonder woman","flash"]
]
for(let i=0;i<hero.length;i++){
    console.log(i,hero[i],hero[i].length);
    for(let j=0;j<hero[i].length;j++){
        console.log(`j=${j},${hero[i][j]}`);
    }
}


// for of loop = 
let fruit = ["cherry","kiwi","strawberry"];
for(a of fruit){
    console.log(a);
}

// ToDo App 
let todo=[];
let req = prompt("enter your request: ");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    else if(req=="list"){
        console.log("---------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------");
    }
    else if(req=="add"){
        let task = prompt("enter the task you want to add: ");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let index = prompt("enter the index task you want to get deleted: ");
        todo.splice(index,1);
        console.log("task deleted");
    }
    else{
        console.log("invalid request!!");
    }
    req = prompt("enter your request: ");
}
