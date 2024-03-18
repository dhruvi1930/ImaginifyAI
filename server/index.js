import cors from "cors"
import express, { response }  from "express";
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import PostRouter from "./routes/Posts.js"
import GenerateImageRouter from "./routes/GenerateImage.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}));

// error handler
app.use((error,request,response,next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    return response.status(status).json({
        success:false,
        status,
        message,
    });
});

app.use("/api/post",PostRouter);
app.use("/api/generateImage",GenerateImageRouter);

// get 
app.get("/",async(request,response) => {
    response.status(200).json({
        message:"Welcome to ImaginifyAI !!",
    });
});

// Connection to database
const connecteDatabase = async () => {
    mongoose.set('strictQuery',true);
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log("MongoDB is connected successfully !!"))
        .catch((error) => {
            console.error("Failed to connect to MondoDB");
            console.error(error);
        });
};

// to start server
const startServer = async () => {
    try{
        connecteDatabase()
        app.listen(8080,
            () => console.log('Server started without any problem on port 8080'));
    } catch (error){
        console.log(error)
    }
}

startServer()

// 82dQnXqWR6yteXN4 dhruvihl369
// mongodb+srv://dhruvihl369:82dQnXqWR6yteXN4@cluster0.gmoyfnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0