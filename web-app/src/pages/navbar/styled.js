import styled from "styled-components";

const Container = styled.div`
flex:1;
background: ${({ theme}) => theme.navbar};
color:${({theme}) => theme.textPrimary};
font-weight: bold;
font-size: 22px;
padding: 14px 50px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
@media only screen and (max-width:600px) {
    padding: 10px 12px;
    flex-direction: column;
}
`

const Logo = styled.img`
width: 350px;
height: 100px;
cursor: pointer;
`

export {Container,Logo}