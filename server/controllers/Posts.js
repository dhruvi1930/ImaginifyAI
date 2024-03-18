import Post from "../models/Posts.js";
import * as dotenv from "dotenv"
import { createError } from "../error.js";
import {v2 as cloudinary} from "cloudinary"
import { json } from "express";

dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
const getAllPosts = async(request,response,next) => {
    try{
        const posts = await Post.find({});
        return response.status(200).json({
            success:true,
            data:posts
        })
    } catch (error) {
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        );
    }
};

const createPost = async (request,response,next) => {
    try{
        const {creater,prompt,image} = request.body;
        const imageUrl = await cloudinary.uploader.upload(image);
        const newPost = await Post.create({
            creater,
            prompt,
            image:imageUrl?.secure_url,
        });
        return response
                .status(201)
                .json({
                    success:true,
                    data:newPost
                 });
    } catch (error) {
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        );
    }
}

// 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

export {getAllPosts,createPost}