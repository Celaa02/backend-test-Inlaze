import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    
    fullname : {
        type: String,
        unique: false
    },
    age:{
        type: Number,
        unique:false
    },
    email:{
        type: String,
        unique:false
    },
    password: {
        type: String,
        required: true
    },
    post:[]
},
{
    timestamps: true,
    
}
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}
export default model('User', userSchema);