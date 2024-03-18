import * as dotenv from "dotenv"
import { createError } from "../error.js";
import {Configuration,OpenAIApi} from "openai"

dotenv.config();


// setup openAI api key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// generate image
const generateImage = async(request,response,next) => {
    try{
        const {prompt} = request.body;
        const responsed = await openai.createImage({
            prompt,
            n:1,
            size:"1024x1024",
            response_format:"b64_json",
        });
        const generatedImage = responsed.data.data[0].b64_json;
        return response.status(200).json({
            image:generatedImage
        })

    }catch(error){
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        );
    }
}

export {generateImage}