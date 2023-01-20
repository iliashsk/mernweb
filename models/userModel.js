import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://iliash:Hello123@cluster0.lceburz.mongodb.net/UserData");

const stuSchema = mongoose.Schema(
{},{strict:false}
)

const Stuuser=mongoose.model("Stuuser",stuSchema)


export {Stuuser}