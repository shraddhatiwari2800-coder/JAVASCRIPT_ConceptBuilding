// EJS(Embedded JavaScript templates)
// ejs is a simple templating language that lets you generate html markup with plain javascript.
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

// app.get("/",(req,res)=>{
//     res.send("hello");
// });

// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// });
app.get("/rolldice",(req,res)=>{
    res.render("rolldice");
});
// app.get("/ig/:username",(req,res) =>{
//     let {username} = req.params;
//     res.render("instagram.ejs",{username});
//     console.log(req.params.username);
// });
app.listen(port, ()=>{
 console.log(`listening on port ${port}`);
});
// interpolation syntax = refers to embedding expressions into marked up text.
