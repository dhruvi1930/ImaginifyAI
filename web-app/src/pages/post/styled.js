import styled from "styled-components";

const Container = styled.div`
height:100%;
overflow-y: scroll;
background: ${({theme}) => theme.background};
padding:20px 20px;
padding-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
@media (max-width:768px) {
    padding:6px 10px
}
`

const Wrapper = styled.div`
width:100%;
max-width:1200px;
padding:32px 0px;
gap: 8%;
display:flex;
justify-content:center;
height:fit-content;

@media (max-width:768px){
    flex-direction: column;
}

`



export {Container,Wrapper}