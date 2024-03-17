import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.textPrimary || 'black'};
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primary || '#ccc'};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.textPrimary || 'black'};
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primary || '#ccc'};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.textPrimary || 'black'};
  resize: none;
`;

export {
    TextArea,
    Container,
    Input,
    Label
}