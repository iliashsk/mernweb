import  mongoose from 'mongoose'
  const cloudFile = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sellprice: {
    type: Number,
    required: true
  },
  filename1: {
    type: String,
    required: true
  },
  filename2: {
    type: String,
    required: true
  },
  filename3: {
    type: String,
    required: true
  },
  fname1: {
    type: String,
    required: true
  },
  fname2: {
    type: String,
    required: true
  },
  fname3: {
    type: String,
    required: true
  },
       });

  const PhotoData=mongoose.model('PhotoData',cloudFile);
  export default PhotoData 