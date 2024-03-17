import styled from "styled-components";

const Form = styled.div`
flex:1;
padding:16px 20px;
display:flex;
flex-direction:column;
gap:9%;
justify-content:center;`

const Top = styled.div`
display:flex;
flex-direction:column;
gap:6px;`

const Heading = styled.div`
font-size:28px;
font-weight:500;
color:${({theme}) => theme.textPrimary};`

const Description = styled.div`
font-size:17px;
font-weight:400;
color:${({theme}) => theme.textSecondary};`

const Body = styled.div`
display:flex;
flex-direction:column;
gap:18px;
font-size:12px;
font-weight:400;
color:${({theme}) => theme.textSecondary};
`

const Actions = styled.div`
display:flex;
flex:1;
gap:8px;`

export {
    Form,
    Top,
    Heading,
    Description,
    Body,
    Actions
}