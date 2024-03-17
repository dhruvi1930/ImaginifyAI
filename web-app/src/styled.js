import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 100vh; 
display: flex;
background: ${({ theme }) => theme.background}; 
color: ${({ theme }) => theme.textPrimary};
overflow-x:hidden;
overflow-y: hidden;
transition: all 0.2s ease;

`

const Wrapper = styled.div`
height: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 3;
`

export { Container, Wrapper };
