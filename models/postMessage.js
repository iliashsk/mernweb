 import mongoose from 'mongoose'
 import encrypt from 'mongoose-encryption';
 mongoose.connect("mongodb+srv://iliash:Hello123@cluster0.lceburz.mongodb.net/UserData");
 
 const userSchema1=mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  address:String,
  grade:String,
  favsub:String
});
 var secret="howareyou";
userSchema1.plugin(encrypt, {secret:secret,encryptedFields:["phone"]});
 const userSchema2=mongoose.Schema({
   rating:Number,
   text:String
 })
 const userSchema3=mongoose.Schema({
  temp:Number
 });

 const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },

    birthdate: {
        type: String
    }
});

const User = mongoose.model('User2', userSchema1);


const Item=mongoose.model("Item",userSchema);
const Usercont=mongoose.model('Usercont',userSchema2);




export default Item;
export {Usercont,User};