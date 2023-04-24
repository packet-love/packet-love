import { OpenAIApi, Configuration } from "openai";
import dotenv from 'dotenv';

export class Chatgpt {
    
    private openai: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            organization: "org-alqhHIyU7VVjKn1QhPUUDzL1",
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.openai = new OpenAIApi(configuration);

    }

    createChatCompletion = async(promt: string) => {
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: promt },
                { role: "system", content: "you are a dating coach" }
            ]
        });

        console.log(response.data);
    }
}