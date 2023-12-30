import { Schema, model } from "mongoose";
import { string } from "joi";

const postSchema = new Schema({
    
    user : {
        type: String,
        unique: false
    },
    userto:{
        type: String,
        unique:false
    },
    title:{
        type: String,
        unique:false
    },
    content: {
        type: String,
        unique: false
    },
    like: []
},
{
    timestamps: true,
    
}
);

export default model('post', postSchema);