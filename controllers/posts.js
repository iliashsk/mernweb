import Item,{Usercont} from '../models/postMessage.js'

export const getPost=(req,res)=>{
	res.send("welcome to router");
  console.log("router called");
}



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
}
export const dataForm=(req,res)=>{
 Item.find({},function(err,result){
  
  res.json(result);
 

      
      
      
        
    
        console.log(result.length);

    });

 
 }


