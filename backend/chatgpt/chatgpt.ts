import { OpenAIApi, Configuration } from "openai";
import * as dotenv from 'dotenv';
dotenv.config();


export class Chatgpt {
    
    private openai: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            organization: "org-G46Elt8wKFzUqNSnEhov5RkQ",
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.openai = new OpenAIApi(configuration);

    }

    createChat= async(promt: string) => {
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: promt },
                { role: "system", content: "상대방에 대한 정보를 토대로 연애를 시작할 수 있게 코멘트 해줘" }
            ]
        });

        console.log(response.data.choices[0].message.content);
    }
}