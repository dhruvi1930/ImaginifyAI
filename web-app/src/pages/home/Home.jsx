import React, { useEffect, useState } from "react";
import { CardWrapper, Container, Description, HomeTitle, Wrapper } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../../components/searchbar/Searchbar";
import ImageCard from "../../components/imageCard/ImageCard";
import { CircularProgress } from "@mui/material";
import { GetPosts } from "../../api";

const Home = () => {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const [search,setSearch]=useState("");
    const [filteredPosts,setFilteredPosts] = useState([]);

    const getPosts = async () => {
        setLoading(true);
        await GetPosts()
            .then((response) => {
                setLoading(false);
                setPosts(response?.data?.data);
                setFilteredPosts(response?.data?.data);
            })
            .catch((error) => {
                setError(error?.response?.data?.message);
                setLoading(false);
            })
    }

    useEffect(() => {
        getPosts();
    },[])

    useEffect(() => {
        if(!search){
            setFilteredPosts(posts);
        }

        const SearchFilteredPosts = posts?.filter((post) => {
            const promptMatch = post?.prompt
            ?.toLowerCase()
            .includes(search.toString().toLocaleLowerCase());
            const createrMatch = post?.creater
            ?.toLowerCase()
            .includes(search.toString().toLocaleLowerCase())

            return promptMatch || createrMatch;
        });

        if(search){
            setFilteredPosts(SearchFilteredPosts)
        }
    },[posts, search])

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
            <Searchbar search={search} setSearch={setSearch} />
            <Wrapper>
                {error && <div style={{color:'red'}}>{error}</div>}
                {loading ? (
                    <CircularProgress/>
                ) : (
                    <CardWrapper>
                    {filteredPosts.length === 0 ? (
                        <>No Posts Found</>
                    ):(
                    <>
                    {filteredPosts
                        .slice()
                        .reverse()
                        .map((item,index) => (
                        <ImageCard item={item} key={index}/>
                    ))}
                    </>
                    )}
                </CardWrapper>
                )}
            </Wrapper>
        </Container> 
    );
}

export default Home;
