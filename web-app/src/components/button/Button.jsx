import React from 'react';
import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import { StyledButton } from './styled';

const Button = ({ text, isLoading, isDisabled, type, onClick, flex  }) => {
  const theme = useTheme();

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      flex={flex}
      theme={theme}
      isDisabled={isDisabled}
    >
      {isLoading ? (
        <>
          <FontAwesomeIcon icon={faSpinner} spin className="button-icon" />
          {text}
        </>
      ) : (
        text
      )}
    </StyledButton>
  );
};

export default Button;
