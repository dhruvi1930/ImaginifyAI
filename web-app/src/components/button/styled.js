import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isDisabled }) => isDisabled ? theme.disabled : theme.primary};
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 10px;
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  gap:6px;
  height: min-content;
  @media (max-width:600px){
    padding: 8px 12px;
  }

  ${({type ,theme}) => type === 'secondary' ? 
  `background:${theme.secondary}` : 
  `background:${theme.primary}`}

  ${({isDisabled}) => isDisabled && 
    `opacity:0.4;
    cursor:not-allowed;`
  }

  ${({isLoading}) => 
    isLoading &&
    `opacity:0.8;
    cursor:not-allowed;`
  }

  ${({flex}) => 
    flex &&
    `flex:1;`
  }
`;

export {StyledButton}