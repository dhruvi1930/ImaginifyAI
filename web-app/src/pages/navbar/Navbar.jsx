import React from 'react'
import { Container, Logo } from './styled'
import Button from '../../components/button/Button'
import logo from '../../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/');

    return(
        <Container>
            <Logo src={logo} onClick={() => navigate("/")}/>
            {path[1] === 'post' ? (
                 <Button 
                 text="Explore Posts" 
                 onClick={() => navigate('/')}
                 />
                ) : (
                <Button 
                text="Create New Post" 
                onClick={() => navigate('/post')}
                />
            )}
            
        </Container>
    )
}

export default Navbar