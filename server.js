import path from 'path';
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import https from 'https'
import postRoutes from "./routes/posts.js"
import Item from './models/postMessage.js'
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",postRoutes);

var port = process.env.PORT || 5000;


//mongoose.connect("mongodb+srv://iliash:Hello123@cluster0.lceburz.mongodb.net/todoList");


////////////////////////////Schema/////////////////////////


/*const userSchema=mongoose.Schema({
  BookNum:Number,
  Author:String,
  Title:String
});
const Item=mongoose.model("Item",userSchema);
*/

let books = [];

/*
app.post('/create', function(req, res) {
  const newBook =new Item({
    BookNum: req.body.bookID,
    Title: req.body.bookTitle,
    Author: req.body.bookAuthor,
  });
newBook.save((err)=>{
  if (!err){
      console.log("Successfully added a new article.");
    } else {
      res.send(err);
    }
})


 
});



app.get("/api",async(req,res)=>{
 Item.find({},function(err,result){
  
  res.json(result);
 

      
      
      
        
    
        console.log(result.length);

    });

 
 });

if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'../client/build')));
  app.get('*',(req,res)=>res.sendFile(__dirname,'../','client','build','index.html'))
}
else{app.get('/',(req,res)=>res.json(({message:"how are you"})))}
*/
//start your server on port 5000
app.listen(port, () => {
  console.log('Server Listening on port'+port);
});



















app.get("/weather",(req,res)=>{
  res.sendFile(__dirname+"/index.html")

}) 

app.post("/weather", (req,res)=>{

  const city=req.body.cityName;
  const apikey="50a789f1ecfef4993d6f7ad02535a06e";
  var url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"";

  https.get(url,(response)=>{

    console.log(response.statusMessage);
    
    response.on("data",(dat)=>{ 
      const weather=JSON.parse(dat);
      var temp=weather.main.temp
      
      var temp=Math.trunc(temp-273);
      res.send("<h1>The temperature of "+city+" is "+temp+" <sup>o</sup>C</h>");
    })
  })
})