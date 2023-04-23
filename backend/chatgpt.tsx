import { OpenAIApi } from "openai";
import configuration from "./configuration";
import axios, { AxiosInstance } from "axios";

class Chatgpt {

    openai: OpenAIApi;
    // instance: AxiosInstance;

    constructor() {
        this.openai = new OpenAIApi(configuration);
        // this.instance = axios.create({
        //     baseURL: 'https://api.openai.com/v1/completions',
        //     timeout: 2000,
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer" + process.env.OPENAI_API_KEY
        //     }
        // });

    }
    
    run = async (promt: string): Promise<void> => {
        const response = await this.openai.createChatCompletion({
           model: "gpt-3.5-turbo",
           messages: [
           { role: "user", content: promt },
           { role: "system", content: "you are a dating coach" }],
        });

        console.log(response.data);
    }
}

export default Chatgpt;