 import mongoose from 'mongoose'
 mongoose.connect("mongodb+srv://iliash:Hello123@cluster0.lceburz.mongodb.net/UserData");
 const userSchema=mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  address:String,
  grade:String,
  favsub:String
});
 const userSchema2=mongoose.Schema({
   rating:Number,
   text:String
 })
 const userSchema3=mongoose.Schema({
  city:String,
  temp:Number
 })
 const Weather=mongoose.model("Weather",userSchema3);
const Item=mongoose.model("Item",userSchema);
const Usercont=mongoose.model('Usercont',userSchema2);
export default Item;
export {Usercont,Weather};