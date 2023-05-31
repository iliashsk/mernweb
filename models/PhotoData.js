import mongoose from 'mongoose'

  const cloudFile = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  fname: {
    type: String,
    required: true
  }
       });

  const PhotoData=mongoose.model('PhotoData',cloudFile);
  export default PhotoData