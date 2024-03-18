import React from 'react'
import { Container, Logo } from './styled'
import Button from '../../components/button/Button'
import logo from '../../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddRounded, ExploreRounded } from '@mui/icons-material'


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
                 rightIcon={<ExploreRounded/>}
                 onClick={() => navigate('/')}
                 />
                ) : (
                <Button 
                text="Create New Post"
                leftIcon={<AddRounded/>} 
                onClick={() => navigate('/post')}
                />
            )}
            
        </Container>
    )
}

export default Navbar