import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    creater:{
        type:String,
        required:true,
    },
    prompt:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
});

const Post = mongoose.model("Post",PostSchema);

export default Post;