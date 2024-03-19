import axios from "axios"

const API = axios.create({
    baseURL:"https://imaginifyai.onrender.com/api/"
})

const GetPosts = async () => await API.get("/post/")
const CreatePost = async (data) => await API.post("/post/",data)
const GenerateAIImage = async (data) => await API.post("/generateImage/",data)


export { GetPosts , CreatePost ,GenerateAIImage}