import React from "react";
import { CardWrapper, Container, Description, HomeTitle, Wrapper } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../../components/searchbar/Searchbar";
import ImageCard from "../../components/imageCard/ImageCard";
import icon from "../../assets/icon.png"


const Home = () => {
    const item = {
        image:icon,
        prompt:"Icon for image generater AI website",
        creater:"Dhruvi",
    };
    
    return (
        <Container>
            <HomeTitle>
                Explore AI image posts with ImaginifyAI
                <Description>
                    <FontAwesomeIcon icon={faCircleDot} size="xs"/>
                    Image Generated with AI
                    <FontAwesomeIcon icon={faCircleDot} size="xs"/>
                </Description>
            </HomeTitle>
            <Searchbar/>
            <Wrapper>
                <CardWrapper>
                    <ImageCard item={item}/>
                    <ImageCard item={item}/>
                    <ImageCard item={item}/>
                    <ImageCard item={item}/>
                    <ImageCard item={item}/>
                    <ImageCard item={item}/>
                    <ImageCard item={item}/>
                    <ImageCard item={item}/>
                </CardWrapper>
            </Wrapper>
        </Container> 
    );
}

export default Home;
