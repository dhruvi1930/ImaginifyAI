import React from 'react'
import { Container, Image } from './styled'
import { CircularProgress } from '@mui/material'

const GeneratedImage = ({src,loading}) => {
  return (
    <Container>
        {loading ? 
            <>
            <CircularProgress style={{
                color:'inherit',
                width:"24px",
                height:"24px"
            }}/>
            Generating your image ...
            </> 
        : (
            <>
                {
                    src ? <Image src={src}/> : 
                    <>Write a prompt to generate image</>
                }
            </>
        )
        }
    </Container>
  )
}

export default GeneratedImage
