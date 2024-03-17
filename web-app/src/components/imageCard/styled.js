import styled from "styled-components";

const CardContainer = styled.div`
position:relative;
display:flex;
border-radius:20px;
box-shadow: 1px 2px 40px 8px black;
cursor: pointer;
transition: all 0.3 ease;
&:hover{
    box-shadow: 1px 2px 40px 8px black;
    scale:1.05;
}
&:nth-child(7n+1){
    grid-column: auto/span 2;
    grid-row: auto/span 2;
}
`

const HoverContainer = styled.div`
opacity: 0;
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
display:flex;
flex-direction:column;
align-items:start;
gap:10px;
backdrop-filter:blur(2px);
background:rgba(0,0,0,0.5);
color:white;
transition:opacity 0.3s ease;   

${CardContainer}:hover & {
    opacity: 1;
}

border-radius:  20px;
justify-content: end;
padding: 12px;
`

const Prompt = styled.div`
font-weight:400px;
font-size:15px;
color:${({theme}) => theme.white};`

const Creater = styled.div`
font-weight: 600px;
font-size: 14px;
display: flex;
gap:8px;
align-items: center;
color:${({theme}) => theme.white};
`

const CustomContainer = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export {CardContainer,HoverContainer,Prompt,Creater,CustomContainer
}