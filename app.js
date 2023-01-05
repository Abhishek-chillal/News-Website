const express= require('express');
const bodyParser= require('body-parser');
const app = express();
const data =require('./data/allnews.json');
app.set('view engine','ejs');
app.set('views','views');


app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static((__dirname,+'/public')));
app.use(express.static("public"));
app.use(bodyParser.json());



const fs = require("fs");

app.get('/',(req,res,next)=>{
          res.render('home',{
              pageTitle:'News Website',
              NEWS: data
            });
            next();
});

app.get("/:postid", function (req, res,next) {
    const match = req.params.postid;
    console.log(match);
        res.render("post",
        { 
            pageTitle:'News Website',
            data:data,
            match:match,
        });
        next();
 });
   

app.listen(3000);