const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000; 


//public static path
const static_path = (path.join(__dirname,"../public"));
const template_path = (path.join(__dirname,"../templates/views"));
const partial_path = (path.join(__dirname,"../templates/partials"));

app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

//routing
app.get("/",(req,res) =>{
    res.render("index.hbs");
});

app.get("/about",(req,res) =>{
    res.render('about.hbs');
});

app.get("/weather",(req,res) =>{
    res.render("weather.hbs");
});

app.get("*",(req,res) =>{
    res.render('error');
});

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});