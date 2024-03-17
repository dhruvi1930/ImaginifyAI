import React from 'react';
import { CardContainer, Creater, CustomContainer, HoverContainer, Prompt } from './styled'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import { DownloadRounded } from '@mui/icons-material';
import FileSaver from 'file-saver';
import { Avatar } from '@mui/material';

const ImageCard = ({item}) => {
  return (
    <CardContainer>
        <LazyLoadImage style={{borderRadius:"20px"}} width="100%" src={item?.image}/>
        <HoverContainer>
            <Prompt>{item?.prompt}</Prompt>
            <CustomContainer>
            <Creater>
                <Avatar style={{ width:"32px",height:'32px'}}>{item?.creater[0]}</Avatar>
                {item?.creater}
            </Creater>
            <DownloadRounded onClick={() => FileSaver.saveAs(item?.image,"download.jpg")}/>
            </CustomContainer>
        </HoverContainer>
    </CardContainer>
  )
}

export default ImageCard

