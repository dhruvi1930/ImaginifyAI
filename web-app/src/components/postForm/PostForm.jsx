import React from 'react'
import TextInput from "../textInput/TextInput"
import { Description, Form, Heading, Top ,Body,Actions} from './styled'
import Button from '../button/Button'

const PostForm = ({
    post,
    setPost,
    createPostLoading,
    setCreatePostLoading,
    setGeneratingImage,
    generatingImage,
}) => {
    const handleGeneratImage = () => {
        setGeneratingImage(true);
    }

    const handleCreatePost = () => {
        setCreatePostLoading(true);
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
