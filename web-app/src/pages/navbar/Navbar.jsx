import React from 'react'
import { Container, Logo } from './styled'
import Button from '../../components/button/Button'
import logo from '../../assets/logo.png'


const Navbar = () => {
    return(
        <Container>
            <Logo src={logo} />
            <Button text={"Create react app"}/>
        </Container>
    )
}

export default Navbar