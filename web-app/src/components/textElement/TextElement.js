import React from 'react';
import { StyledText } from './styled';


const TextElement = ({ type = 'paragraph'
, text }) => {
    const Tag = type === 'paragraph' ? 'p' : type;


  return <StyledText as={Tag} type={type}>{text}</StyledText>;
};

export default TextElement;
