import { mongoose } from 'mongoose';
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please enter a valid email'],
        unique:true
    },
    name:String,
    password:{
        type:String,
        required:[true,'Please enter a valid password'],
    },
},{timestamps:true})

export const UserModel = mongoose.models.Users ||  mongoose.model('Users',UserSchema)