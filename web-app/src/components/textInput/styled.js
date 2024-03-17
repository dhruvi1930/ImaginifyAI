import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  padding: 0px 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSecondary};
`;

const OutlinedInput = styled.div`
border-radius:8px;
border:0.5px solid ${({theme}) => theme.textSecondary};
background-color:transparent;
color:${({theme}) => theme.textSecondary};
outline:none;
padding:14px;
display:flex;
align-items:center;
gap:12px;
&:focus-within {
  border-color: ${({theme}) => theme.primary};
}`

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary };
  &:focus{
    outline: none;
  }
`;


export {
    Container,
    Input,
    Label,
    OutlinedInput
}