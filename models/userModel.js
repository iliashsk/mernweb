import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://iliash:Hello123@cluster0.lceburz.mongodb.net/UserData");

const stuSchema = mongoose.Schema(
  {
      name:String,
      email: String,
      mobile: Number,
      village:String,
      state:String,
      pin:Number,
      math: Number,
      phys: Number,
      chem: Number,
      eng:Number,
      ben:Number,
      hin:Number,
    },
  {
    timestamps: true,
  }
)

const Stuuser= mongoose.model('Stuuser', stuSchema)
export default Stuuser;