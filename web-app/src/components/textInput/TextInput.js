import React from 'react';
import { Container,Label,Input,TextArea } from './styled';

const TextInput = ({ label, placeholder, name, value, handleChange, textArea, rows, columns }) => {
  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      {!textArea ? (
        <Input
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <TextArea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          rows={rows || '3'}
          cols={columns || '30'}
        />
      )}
    </Container>
  );
};

export default TextInput;
