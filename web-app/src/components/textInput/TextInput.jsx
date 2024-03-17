import React from 'react';
import { Container,Label,Input, OutlinedInput } from './styled';

const TextInput = ({ 
  label, 
  placeholder, 
  name, 
  value, 
  handleChange, 
  textArea, 
  rows, 
  columns 
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput>
      <Input
          as={textArea ? 'textarea' : 'input'}
          type="text"
          name={name}
          rows={rows}
          columns={columns}
          placeholder={placeholder}
          value={value}
          onChange={(event) => handleChange(event)}
        />
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;
