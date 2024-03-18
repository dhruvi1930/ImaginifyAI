import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TextInput from "../textInput/TextInput"
import { Description, Form, Heading, Top ,Body,Actions} from './styled'
import Button from '../button/Button'
import { CreatePost, GenerateAIImage } from '../../api'

const PostForm = ({
    post,
    setPost,
    createPostLoading,
    setCreatePostLoading,
    setGeneratingImage,
    generatingImage,
}) => {
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const handleGeneratImage = async () => {
        setGeneratingImage(true);
        await GenerateAIImage({
            prompt:post?.prompt
        }).then((response) => {
          setPost({
            ...post,
            image:`data:image/jpge;base64,${response?.data?.image}`
          })
          setGeneratingImage(false)  
        }).catch((error) => {
            setError(error?.response?.data?.message);
            setGeneratingImage(false); 
        })
    }

    const handleCreatePost = async () => {
        setCreatePostLoading(true);
        await CreatePost(post).then((response) => {
          setCreatePostLoading(false);
          navigate('/');  
        }).catch((error) => {
            setError(error?.response?.data?.message);
            setCreatePostLoading(false); 
        })
    }

  return (
   <Form>
    <Top>
        <Heading>Generate Image</Heading>
        <Description>Write your prompt to generate Image</Description>
    </Top>
    <Body>
        <TextInput 
        label="Creater"
        placeholder="Write your name . . ."
        name="name"
        value={post?.creater}
        handleChange={(event) => setPost({...post,creater:event.target.value})}
        />
        <TextInput
        label="Prompt"
        placeholder="Write prompt . . ."
        name="name"
        rows="5"
        textArea
        value={post?.prompt}
        handleChange={(event) => setPost({...post,prompt:event.target.value})}
        />
        {error && <div style={{color:'red'}}>{error}</div>}
    </Body>
    <Actions>
        <Button 
            text="Generate Image"  
            flex
            isDisabled={ post?.prompt === '' }
            isLoading={generatingImage}
            onClick={() => handleGeneratImage()}
        />
        <Button 
            text="Post Image" 
            type="secondary"  
            flex
            isLoading={createPostLoading}
            isDisabled={post?.creater === '' || post?.prompt === '' || post?.image === ''}
            onClick={() => handleCreatePost()}
        />
    </Actions>
   </Form>
  )
}

export default PostForm
