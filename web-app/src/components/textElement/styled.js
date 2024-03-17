import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${({ type }) => {
    switch (type) {
      case 'h1':
        return '2em';
      case 'h2':
        return '1.5em';
      case 'h3':
        return '1.17em';
      case 'h4':
        return '1em';
      case 'h5':
        return '.83em';
      case 'h6':
        return '.67em';
      case 'paragraph':
      default:
        return '1em';
    }
  }};
  font-weight: ${({ type }) => (type.startsWith('h') ? 'bold' : 'normal')};
  margin: 10px 0;
`;

export {StyledText}