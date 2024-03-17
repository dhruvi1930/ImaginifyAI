import React, { useState } from "react";
import { Container,Wrapper } from "./styled";
import PostForm from "../../components/postForm/PostForm";
import GeneratedImage from "../../components/generatedImage/GeneratedImage";

const Post = () => {
    const [isGeneratedImageLoading,setIsGeneratedImageLoading] = useState(false);
    const [isPost,setIsPost] = useState(false);
    const [post,setPost] = useState({
        image:'',
        creater:'',
        prompt:''
    })

return (
    <Container>
        <Wrapper>
            <PostForm 
                post={post} 
                setPost={setPost} 
                createPostLoading={isPost}
                setCreatePostLoading={setIsPost}
                setGeneratingImage = {setIsGeneratedImageLoading}
                generatingImage={isGeneratedImageLoading} 
            />
            <GeneratedImage 
                src={post?.image} 
                loading={isGeneratedImageLoading}
            />
        </Wrapper>
    </Container> 
    );
}

export default Post;
