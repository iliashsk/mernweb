import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://iliash:Hello123@cluster0.lceburz.mongodb.net/UserData");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
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

const File = mongoose.model('File', fileSchema);

export default File;