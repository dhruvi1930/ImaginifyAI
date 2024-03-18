import axios from "axios"

const API = axios.create({
    baseURL:"http://localhost:8080/api/"
})

const GetPosts = async () => await API.get("/post/")
const CreatePost = async (data) => await API.post("/post/",data)
const GenerateAIImage = async (data) => await API.post("/generateImage/",data)


export { GetPosts , CreatePost ,GenerateAIImage}