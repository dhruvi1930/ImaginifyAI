import styled from "styled-components";

const StyledButton = styled.button`
  display: ${({ flex }) => (flex ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isDisabled }) => isDisabled ? theme.disabled : theme.primary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ isDisabled }) => isDisabled ? 0.5 : 1};
  font-size: medium;
  font-weight: bold;

  /* &:hover {
    background-color: ${({ theme, isDisabled }) => isDisabled ? theme.disabled : theme.secondary};
  } */

  .button-icon {
    margin-right: ${({ rightIcon }) => rightIcon ? '8px' : '0'};
    margin-left: ${({ leftIcon }) => leftIcon ? '8px' : '0'};
  }
`;

export {StyledButton}