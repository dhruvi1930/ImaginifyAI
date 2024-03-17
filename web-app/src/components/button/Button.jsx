import React from 'react';
import { StyledButton } from './styled';
import { CircularProgress } from '@mui/material';

const Button = ({ 
  text, 
  isLoading, 
  isDisabled, 
  type, 
  onClick, 
  flex , 
  leftIcon,
  rightIcon }) => {
  return (
    <StyledButton
      type={type}
      onClick={() => !isLoading && !isLoading && onClick()}
      isLoading={isLoading}
      flex={flex}
      isDisabled={isDisabled}
    >
      {isLoading && (
        <CircularProgress style={{ width:'18px',height:'18px'}}/>
      )}
     {leftIcon}
     {text}
     {isLoading && <>...</>}
     {rightIcon}
    </StyledButton>
  );
};

export default Button;
