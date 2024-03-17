import  {ThemeProvider} from 'styled-components';
import { DarkTheme } from './utils/theme';
import Home from './pages/home/Home';
import { Container,Wrapper } from './styled';
import React from "react"
import CreatePost from './pages/post/Post';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './pages/navbar/Navbar';


function App() {
  return (
   <ThemeProvider theme={DarkTheme}>
    <Container>
      <Wrapper>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/post' element={<CreatePost/>} exact/>
        </Routes>
        </BrowserRouter>
      </Wrapper>
    </Container>
   </ThemeProvider>
  );
}

export default App;
