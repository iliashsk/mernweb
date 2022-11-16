import Item,{Usercont} from '../models/postMessage.js'
import https from 'https'
export const createPost=(req,res)=> {
  const newBook =new Item({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address:req.body.address,
    grade:req.body.grade,
    favsub:req.body.favsub
  }); 
newBook.save((err)=>{
  if (!err){
      console.log("Successfully added a new article.");
    } else {
      console.log(err);
    }
})

};

export const createRating=(req,res)=> {

  const newRating =new Usercont({
    rating: req.body.rating,
    text: req.body.text
   
  });
newRating.save((err)=>{
  if (!err){
      console.log("Successfully added newRating");
    } else {
      console.log("something went wrong");
    }
})

}

export const address=function(req, res) {
  
  Usercont.find({},(err,found)=>{
  
    res.json(found);

  }
  )
}
  /*
app.get('/home', 
  /*console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('Books : ', JSON.stringify(books));
  res.end(JSON.stringify(books));
  
);
*/

export const dataForm=(req,res)=>{
 Item.find({},function(err,result){


   for(var i=0;i<result.length;i++){
          delete result[i]._id;
          delete result[i].__v;

        }
      
  
  res.json(result);
 

    });

 
 }

export const Weather=(req,res)=>{
  let town=req.body.text;
const apikey="50a789f1ecfef4993d6f7ad02535a06e";
  var url="https://api.openweathermap.org/data/2.5/weather?q="+town+"&appid="+apikey+"";

  https.get(url,(response)=>{   
  
    response.on("data",(dat)=>{
      const weather=JSON.parse(dat);
      if(weather.cod===200){
        var temperature=weather.main.temp;
      
      var temperature=Math.trunc(temperature-273);

  
      res.json({town:town,temp:temperature});
      }
      else{
        res.json({town:town,temp:"not found"});
      }
      
    });



    })
};

export const Login=(req, res)=> {
  const email=req.body.email;
  const pass=req.body.pass;
  Item.find({email:email},(err,found)=>{
  
    res.json(found);
console.log(found);
  }
  )
}

