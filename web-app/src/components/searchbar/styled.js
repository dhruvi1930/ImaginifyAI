import styled from 'styled-components'

const SearchBarContainer = styled.div`
max-width:500px;
display:flex;
width:100%;
border:1px solid ${({theme}) => theme.textSecondary};
border-radius:5px;
padding:12px 16px;
cursor: pointer;
gap:5px;
align-items:center;
color:${({theme}) => theme.textSecondary};`

export {SearchBarContainer}