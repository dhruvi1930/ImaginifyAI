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
gap: 20px;
@media (max-width:768px) {
    padding:6px 10px
}
`

const HomeTitle = styled.div`
font-size:34px;
font-weight:500;
color:${({theme}) => theme.textPrimary};
display:flex;
align-items:center;
flex-direction:column;
@media (max-width:600px) {
    font-size: 22px;
}`

const Description = styled.div`
font-size:30px;
font-weight:800;
display: flex;
align-items: center;
gap: 10px;
color:${({theme}) => theme.primary};
`

const Wrapper = styled.div`
width:100%;
max-width:1400px;
padding:32px 0px;
display:flex;
justify-content:center;`

const CardWrapper = styled.div`
display:grid;
gap:20px;
@media (min-width:1200px){
    grid-template-columns: repeat(4,1fr);
}

@media (min-width:640px) and (max-width:1199px){
    grid-template-columns: repeat(3,1fr);
}

@media (max-width:639px){
    grid-template-columns: repeat(2,1fr);
}

`

export { 
    Container,
    HomeTitle,
    Description,
    Wrapper,
    CardWrapper
}