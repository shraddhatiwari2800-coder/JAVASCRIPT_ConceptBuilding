//library = a library is a collection of pre-written code that can be used to perform specific tasks. ex - axios
//framework = a framework is a set of prewritten code that provides a structure for developing software applications. ex - express

// express = a node js web application framework that helps us to make web applications.it is udes for server side programming.

const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/apple",(req,res)=>{
    res.send("hello");
});

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("hello");
});

// app.get("*",(req,res)=>{
//     res.send("hey");
// });

app.use((req, res) => {
    console.log("request received");
    res.send("Hello! Server is connected successfully.");
});


//app.get()
//Handles a particular GET route.

//app.use()
//Handles middleware and can also act as a fallback handler.

//res.send()
//Sends the response to the client.
